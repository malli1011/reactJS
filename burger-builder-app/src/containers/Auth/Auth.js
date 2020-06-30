import React ,{Component} from 'react';
import {connect} from 'react-redux'
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import * as actions from '../../store/actions/index';
import classes from './Auth.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';

class Auth extends Component{
    state={
        controls:{
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail:true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength:6
                },
                valid: false,
                touched: false
            }

        },
        isSingup:true
    }

    componentDidMount=()=>{
        if(!this.props.buildingBurger&& this.props.authRedirectPath !== '/'){
            this.props.onSetAuthRedirectPath();
        }
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.trim().length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.trim().length <= rules.maxLength && isValid;
        }
        console.log(isValid);
        return isValid;

    }

    inputChangeHandler = (event, controlName) => {
        const updatedControls ={
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value:event.target.value,
                valid:this.checkValidity(event.target.value,this.state.controls[controlName].validation),
                touched:true
            }
        };
        this.setState({controls:updatedControls});
    }

    onSubmitHandler =(event)=>{
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSingup);
    }

    switchAuthHandler =(event)=>{
        event.preventDefault();
        this.setState(prevState=>{
            return{isSingup:!prevState.isSingup}
        })
    }

    render(){

        let formElementArray = [];

        for (let key in this.state.controls) {
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        let form = formElementArray.map(element => (
                <Input
                    key={element.id}
                    elementType={element.config.elementType}
                    elementConfig={element.config.elementConfig}
                    value={element.config.value}
                    invalid={!element.config.valid}
                    shouldValidate={element.config.validation}
                    touched={element.config.touched}
                    changed={(event) => this.inputChangeHandler(event, element.id)} />
            ))
            
        if(this.props.loading){
            form = <Spinner/>;
        }    

        let errorMessage = null;

        if(this.props.error){
        errorMessage=<p>{this.props.error}</p>
        }

        let authRedirect =null;

        if(this.props.isAuth){
            authRedirect =<Redirect to={this.props.authRedirectPath}/>
        }
            

        return (
            <div>
                {authRedirect}
                {errorMessage}
                <form className={classes.Auth} onSubmit={this.onSubmitHandler}>
                    {form}
                    <Button btnType="Success" >SUBMIT</Button>
                    <Button btnType="Danger" 
                    clicked={this.switchAuthHandler}>Switch to {this.state.isSingup?"SIGNIN":"SIGNUP"}</Button>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth:(email,password,issignUp)=>dispatch(actions.auththenticate(email,password,issignUp)),
        onSetAuthRedirectPath:()=> dispatch(actions.authRedirect('/'))
    }
}

const mapStateToProps = state =>{
    return {
        loading : state.auth.loading,
        error:state.auth.error,
        isAuth:state.auth.token!==null,
        buildingBurger:state.burgerBuilder.building,
        authRedirectPath:state.auth.authRedirectPath
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Auth);
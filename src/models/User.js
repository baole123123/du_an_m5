import axios from "axios";
class UserModel {
    apiUrl = 'https://6083df209b2bed00170404a0.mockapi.io/api';
    login(data){
        return new Promise( ( resolve,reject ) => {
            axios.post( this.apiUrl+"/users/login" , data).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
    register(data){
        return new Promise( ( resolve,reject ) => {
            axios.post( this.apiUrl+"/users/register" , data).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }

}
export default new UserModel();
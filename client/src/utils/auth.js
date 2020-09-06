class Auth {
    constructor() {
        this.authenticated = false;
    }

    register(body, cb) {
        const onRegister = async () => {
  
            try {  
                const response = await fetch('/auth/register', {
                    method: 'POST',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(body)
                });
    
                const parseRes = await response.json()
    
                
                this.authenticated = true;
                cb()
                
            } catch (error) {
                console.log(error.message);
                alert('Wrong email or password!');
            }
        }
        onRegister();
        cb();
    }

    login(body, cb) {
        const onLogin = async () => {
  
            try {  
                const response = await fetch('/auth/login', {
                    method: 'POST',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(body)
                });
    
                const parseRes = await response.json()
    
                
                this.authenticated = true;
                cb()
                
            } catch (error) {
                console.log(error.message);
                alert('Wrong email or password!');
            }
        }
        onLogin();
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        cb()
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();
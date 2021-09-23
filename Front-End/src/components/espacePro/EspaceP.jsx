import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Button, TextField, Card, CardActions,Paper,Table,TableCell,TableBody,TableContainer ,TableHead,TableRow  } from '@material-ui/core'
import { } from '@material-ui/icons'
import logo from '../../asserts/decor-brand.png'
import Alert from '@material-ui/lab/Alert';
const styles = theme => ({
    Rtitle: {
        fontSize: "32px",
        textAlign: "center",
        textTransform: " uppercase",
        fontStyle: "normal",
        fontWeight: "bold",
        position: "relative",
        borderBottom: "none",
        color: " #00927b",
        marginBottom: "15px",


    }

})


 class EspaceP extends Component {
    constructor() {
        super()
        this.state = {
            titre: '',
            description: '',
            u_cin:'',
            date:'',
            error: null, 
            loading: false,
            added:""
        };
    }
    
    
        // Simple POST request with a JSON body using fetch
    
       
    

    
    handleOnchange = e => this.setState({ [e.target.name]: e.target.value });
    
    
    
    
    
    handleAddAnalyse = event => {
        event.preventDefault()
        this.setState({ loading: true });
        const { titre, description, u_cin,date } = this.state;
        if (!titre.length || !description.length || !u_cin.length) {
            this.setState({ error: "please fill out all the details", loading: false })
            return false;
        } 
        else {
            const regesterData = {
                titre: titre,
                description: description,
               
                
                
                date:date,
               
              
                
            };
            const url ='http://localhost:8089/v1/add/analyse/'+u_cin
             fetch (url, {
                method  : 'POST',
                headers : {'Content-Type': 'application/json' } , 
                body : JSON.stringify(regesterData),
            }).then(()=>{ this.setState({ added:  "l'analyse est correctement ajouté " })})
            console.log({regesterData})
            
         
    
            this.setState({
                titre: "",
                description:"",
                
                u_cin: '',
              
                date:'',
               
              
            });
            setTimeout(() => {
              
                    
                
                this.setState({ loading: false })
            }, 2000)
        }
    };
    
    render() {
        const { classes } = this.props;
        const { titre,description,date,u_cin,added } = this.state;

        return (
            <>
               <Typography variant="h6" className={classes.Rtitle}>Ajouter des analyses</Typography>
    <Container component="main" maxWidth="xs">
   
      <div className={classes.paper}>
      
      
        <form className={classes.form} onSubmit={this.handleSignUp} >
          <Grid container spacing={2}>
           
    
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="titre"
                label="Titre"
                name="titre"
                
                onChange={this.handleOnchange}
               value={titre}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
           
                name="description"
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                autoFocus
                onChange={this.handleOnchange}
                value={description}
              />
            </Grid>
            <Grid item xs={12}>
               <TextField  
               type='date'
               fullWidth
               required
               variant="outlined"
               id="date"
               name="date"
               onChange={this.handleOnchange}
               value={date}
               
               >
                 
               </TextField>
            </Grid>
          
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cin"
                label="CIN Patient"
                name="u_cin"
                autoComplete="cin"
                onChange={this.handleOnchange}
               value={u_cin}
              />
            </Grid>
            <Grid>
            <Button
            variant="contained"
            component="label"
            >
            Téléverser un fichier
            <input
                type="file"
               
            />
            </Button>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          onClick={this.handleAddAnalyse}
          >
            Ajouter
          </Button>
          
       
        </form>
        <Alert icon={false} severity="success">{added}</Alert>
  
      </div>
      
    </Container>
            </>
        )
    }
}
export default withStyles(styles)(EspaceP);
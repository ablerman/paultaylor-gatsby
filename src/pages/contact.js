import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const styles = theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            marginLeft: '255px'
        }
    },
    container: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center'
    },
    textField: {
        display: 'block',
        width: '100%',
        margin: '10px'
    },
    button: {
        marginLeft: '10px',
    },
    h2: {
        marginLeft: '10px',
        marginBottom: '20px',
        color: 'black',
    }
});

const clients = (props) => {
    return (
        <Layout location={props.location}>
            <div className={props.classes.container}>
                <div>
                    <h2 className={props.classes.h2}>
                        <a href="mailto://hello@thisispaultaylor.com" style={{color:'inherit'}}>
                            email: hello@thisispaultaylor.com
                        </a>
                    </h2>
                    <form method="POST" action="https://formspree.io/hello@thisispaultaylor.com">
                        <TextField
                            name="name"
                            label="name"
                            className={props.classes.textField}
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            name="email"
                            label="email"
                            type="email"
                            autoComplete="email"
                            className={props.classes.textField}
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            name="message"
                            label="message"
                            className={props.classes.textField}
                            fullWidth
                            multiline
                            variant="outlined"
                            rows={5}
                        />
                        <Button
                            className={props.classes.button}
                            type="submit"
                            variant={'outlined'}
                        >
                            SUBMIT
                        </Button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};


clients.defaultProps = {};

clients.propTypes = {};

export default withStyles(styles)(clients);

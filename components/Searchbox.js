import { FlexBox } from "./shared components"
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    }
})

export default withStyles(styles)(({ classes }) => (
    <div style={{ width: '100%' }}>
        {console.log(classes)}
        <FlexBox direction="row-reverse" style={{ padding: '12px 0' }}>
            <TextField className={classes.textField} label="Search Items" />
        </FlexBox>
    </div>
))
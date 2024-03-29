import Alert from '@mui/material/Alert';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const SelectionAlert = ({ onClose, message }) => {
  console.log("alert called")
  return (
    <div className="alert-notification">
    <ClickAwayListener onClickAway={onClose}>
    <Alert 
      severity="warning" 
      variant="outlined" 
      sx={{ 
        borderColor: '#662d91', 
        color: '#662d91', 
        '& .MuiAlert-icon': {
          color: '#6a3771', 
          fontSize: '0.75rem',
        },
        '& .MuiAlert-message': {
          color: '#6a3771', 
          fontSize: '0.75rem'
        }
      }}
      >
        {message}
      </Alert>
    </ClickAwayListener>
    </div>
  );
};

export default SelectionAlert;

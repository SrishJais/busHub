import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { RxCross2 } from "react-icons/rx";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AddUpdateBusModal() {
  //Form part
  const [busStatus, setBusStatus] = React.useState("");
  const [busState, setBusState] = React.useState("");

  //________________________Dialog/modal part start________________________
   //Dialog/modal part
   const [open, setOpen] = React.useState(false);
   const [scroll, setScroll] = React.useState("paper");
   
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  //________________________Dialog/modal part end________________________

  //Form part
  const handleStatusChange = (event) => {
    setBusStatus(event.target.value);
  };

  const handleStateChange = (event) => {
    setBusState(event.target.value);
  };

  return (
    <React.Fragment>
      {/* ______________ add/update modal btn ______________  */}
      <Fab
        className="ml-2 muiIcon"
        size="small"
        aria-label="add"
        id="busAddIcon"
        onClick={handleClickOpen("paper")}
      >
        <AddIcon />
      </Fab>
      {/* _________________________modal open ______________________  */}
      <Dialog
        // maxWidth="sm" ,fullWidth used to change width of dialog modal
        maxWidth="sm"
        fullWidth
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <div className="d-flex justify-content-between">
          {/* ________________________Title_______________  */}
          <DialogTitle id="scroll-dialog-title" className="px-3">
            <Typography variant="body1" style={{ fontWeight: "bolder" }}>
              ADD BUS
            </Typography>
          </DialogTitle>
          <div className="d-flex align-items-center">
            <Fab
              id="addUpdateModalCancelBtn"
              className="ml-2 muiIcon mx-3"
              size="small"
              aria-label="cancel"
              onClick={handleClose}
              style={{ fontSize: "22px" }}
            >
              <RxCross2 />
            </Fab>
          </div>
        </div>
        <hr className="mt-0" />
        {/* _____________________add form______________________ */}
        <div dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            className="px-3 my-1"
          >
            <form action="onSubmit">
              <div component="form" spacing={2}>
                {/* ___________________________bus no. input_____________________________  */}

                <div className="mb-3">
                  <div className="addUpdateInputLabel">
                    Name<span style={{ color: "red" }}>*</span>
                  </div>

                  <TextField
                    // remove bottom border
                    InputProps={{
                      disableUnderline: true,
                    }}
                    //override default padding in textfield
                    sx={{
                      "& .MuiInputBase-input": {
                        paddingTop: "12px",
                        paddingRight: "12px",
                        paddingBottom: "12px",
                        paddingLeft: "12px",
                      },
                    }}
                    //change styling of placeholder in textfield
                    // inputProps={{
                    //   sx: {
                    //     "&::placeholder": {
                    //       color: "grey",
                    //     },
                    //   },
                    // }}
                    id="filled-basic"
                    fullWidth
                    autoFocus
                    size="small"
                    //can use other variants also
                    placeholder="Enter bus no."
                    variant="filled"
                  />
                </div>

                {/* ___________________________Registration Plate No. input_______________________________  */}
                <div className="mb-3">
                  <div className="addUpdateInputLabel">
                    Registration Plate No.
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <TextField
                    // remove bottom border
                    InputProps={{
                      disableUnderline: true,
                    }}
                    id="filled-basic"
                    fullWidth
                    autoFocus
                    size="small"
                    //can use other variants also
                    placeholder="Enter registration plate no."
                    variant="filled"
                    //change styling of placeholder in textfield
                    // inputProps={{
                    //   sx: {
                    //     "&::placeholder": {
                    //       color: "grey",
                    //     },
                    //   },
                    // }}
                    //override default padding
                    sx={{
                      "& .MuiInputBase-input": {
                        paddingTop: "12px",
                        paddingRight: "12px",
                        paddingBottom: "12px",
                        paddingLeft: "12px",
                      },
                    }}
                  />
                </div>

                {/* ___________________________Bus status dropdown_______________________________*/}
                <div className="mb-3">
                  <div className="addUpdateInputLabel">
                    Status
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <FormControl fullWidth variant="filled">
                    <Select
                      value={busStatus}
                      onChange={handleStatusChange}
                      //show by default first menu item
                      displayEmpty
                      //remove bottom border
                      disableUnderline
                      // style={{paddingTop:"-25px"}}
                      sx={{
                        "& .MuiSelect-select": {
                          paddingTop: "12px",
                          paddingRight: "12px",
                          paddingBottom: "12px",
                          paddingLeft: "12px",
                        },
                      }}
                    >
                      <MenuItem value="">Select bus status</MenuItem>
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Inactive">Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                {/* ______________________________Travel state dropdown____________________________*/}

                <div className="mb-3">
                  <div className="addUpdateInputLabel">
                    Travel State
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <FormControl fullWidth variant="filled">
                    <Select
                      value={busState}
                      onChange={handleStateChange}
                      //show by default first menu item
                      displayEmpty
                      //remove bottom border
                      disableUnderline
                      // style={{paddingTop:"-25px"}}
                      sx={{
                        "& .MuiSelect-select": {
                          paddingTop: "12px",
                          paddingRight: "12px",
                          paddingBottom: "12px",
                          paddingLeft: "12px",
                        },
                      }}
                    >
                      <MenuItem value="">Select travel state</MenuItem>
                      <MenuItem value="Active">West Bengal</MenuItem>
                      <MenuItem value="Inactive">Delhi</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </form>
          </DialogContentText>
        </div>
        <DialogActions className="mb-2">
          {/* ______________________updateProfileBtn_____________________  */}
          <Button
            id="addupdateBusBtn"
            variant="contained"
            fullWidth
            p={2}
            style={{ borderRadius: "20px" }}
            onClick={handleClose}
          >
            ADD BUS
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

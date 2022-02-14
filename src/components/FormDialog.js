import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { getAuth, updateProfile } from 'firebase/auth'

export default function FormDialog() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [photoURL, setPhotoURL] = useState('')

  // currentuser
  const user = getAuth().currentUser

  // usenavigate
  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!name || !photoURL) {
      return alert('Please fill all fields')
    }

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log('updated profile')
        navigate('/dashboard')
      })
      .catch(() => console.log('some error'))
  }

  return (
    <>
      <Button
        sx={{ textTransform: 'capitalize', marginLeft: 4 }}
        color="secondary"
        variant="contained"
        onClick={handleClickOpen}
      >
        Settings
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change your account settings</DialogTitle>
        <form onSubmit={onSubmit}>
          <DialogContent>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              margin="dense"
              id="photourl"
              label="Photo URL"
              type="text"
              fullWidth
              variant="standard"
              required
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              type="submit"
              variant="contained"
              color="primary"
            >
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

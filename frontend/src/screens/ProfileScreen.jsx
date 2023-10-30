import { Form, Button, Row, Col,Image } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Toast } from "react-bootstrap"
import Loader from "../components/Loader"
import { setCredentials } from "../slices/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { useUpdateUserMutation } from "../slices/usersApiSlice"

const ProfileScreen = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [image,setImage] = useState(null )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.auth)
  const [updateProfile, { isLoading }] = useUpdateUserMutation()

  console.log('userInfo',userInfo)


  useEffect(() => {
    setName(userInfo.name)
    setEmail(userInfo.email)
  }, [userInfo.setName, userInfo.setEmail])

  const submitHandler = async (e) => {
    console.log('-----------entered submit')
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error("passwords do not match!")
    } else {

      try {
       
        
        const formData = new FormData()
        console.log('entered fomm------------------->')
        formData.append('_id',userInfo._id)
        formData.append('name',name)
        formData.append('email',email)
       
        formData.append('password',password)
        formData.append('file',image)

        console.log('------------------------',image)
        
        // const res = await updateProfile({
        //   _id: userInfo._id,
        //   name,
        //   email,
        //   password,
        // }).unwrap()
        console.log('end')
        console.log(formData)

        const res = await updateProfile(formData).unwrap();
        console.log(res,'-------------------------------')

        //doing an append method for sending image 

        dispatch(setCredentials(res))
        toast.success("Profile updated")
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }

  

  return (
    <FormContainer>
      <h1>Update Profile</h1>
      <Col xs={6} md={4}>
        <Image
          style={{ width: "100px", marginRight: "20px" }}
          src={`http://localhost:8000/Images/${userInfo.image}`}
          roundedCircle
        />
      </Col>

      <Form.Group className="my-2" controlId="image">
        <Form.Label style={{ fontWeight: "bolder" }}> Edit profile </Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          hidden
        ></Form.Control>
      </Form.Group>

      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            placeholder="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {isLoading && <Loader />}

        <Button type="submit" variant="primary" className="mt-3">
          Update
        </Button>
      </Form>
    </FormContainer>
  )
}
//form.control  == <input>

export default ProfileScreen

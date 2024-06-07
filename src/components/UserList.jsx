import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "store/userSlice";
import classes from "assets/styles/UserList.module.scss";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UserList = () => {
  const dispatch = useDispatch();
  
  const userList = useSelector((store) => store.user.users);

  const [modalShow, setModalShow] = React.useState(false);
  const [userSelected, setUserSelected] = useState(null);
  
  const handleDeleteUser = async() => {
      await dispatch(deleteUser(userSelected?.id));
      dispatch(fetchUsers());
      setModalShow(false);  
  };

  useEffect(() => {
    dispatch(fetchUsers());
   
  }, []);


  return (
    <>
      <div>
        <div className='containerUser'>
          <div>
            <Link to="/user/create" className={`${classes.btn} ${classes.btn__create__new}`}>
              Create new User
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>FirtName</th>
                <th>LastName</th>
                <th>Address</th>
                <th>Birthday</th>
                <th>Department</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {userList?.map((item) => (
                <tr key={item.id}>
                  <td>{item?.id}</td>
                  <td>{item?.firstName}</td>
                  <td>{item?.lastName}</td>
                  <td>{item?.address}</td>
                  <td>{item?.birthday}</td>
                  <td>{item?.department}</td>
                  <td>
                    <Link className={`${classes.btn} ${classes.btn__edit}`} to={`/user/${item?.id}`}>
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button className={`${classes.btn} ${classes.btn__delete}`} 
                    onClick={() => {
                      setModalShow(true);
                      setUserSelected(item);
                    }}
                      >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> 
      </div>

      <Modal
      show={modalShow}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            Delete
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Are you sure you want to delete this user?</h6>  
          </Modal.Body>
          <Modal.Footer>
            <Button className='bg-transparent text-black border-black border-opacity-25' 
              onClick={() => {
                setUserSelected(null);
                setModalShow(false);
            }} 
            >
              Cancel
            </Button>
            <Button className={classes.btn__delete} onClick={handleDeleteUser}>OK</Button>
          </Modal.Footer>
      </Modal>
</>
  );
};

export default UserList;

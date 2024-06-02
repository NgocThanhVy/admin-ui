import React, { useState, useEffect } from 'react';
import classes from "assets/styles/UserList.module.scss";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "store/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((store) => store.user.users);
  const [confirmDelete, setConfirmDelete] = useState(false); // State để theo dõi trạng thái của form hỏi xác nhận
  const [userIdToDelete, setUserIdToDelete] = useState(null); // State để lưu trữ ID của người dùng cần xóa

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // Hàm xác nhận xóa
  const handleDeleteConfirm = (userId) => {
    setUserIdToDelete(userId);
    setConfirmDelete(true);
  };

  // Hàm xóa người dùng
  const handleDeleteUser = () => {
    // Gửi hành động xóa người dùng tới reducer
    // dispatch(deleteUser(userIdToDelete));

    // Sau khi xóa, đặt lại trạng thái của form hỏi xác nhận
    setConfirmDelete(false);
  };

  // Hàm hủy bỏ xóa
  const handleCancelDelete = () => {
    // Đặt lại trạng thái của form hỏi xác nhận
    setConfirmDelete(false);
  };

  return (
    <div className='py-5'>
      <div className='containerUser'>
        <div>
          <Link to="usercreate"
            className={`${classes.btn} ${classes.btn__create__new}`}
          >
            Create new User
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>UseName</th>
              <th>FullName</th>
              <th>Department</th>
              <th>Position</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList?.map((user) => (
              <tr key={user.id}>
                <td>{user?.id}</td>
                <td>{user?.email}</td>
                <td>{user?.username}</td>
                <td>{user?.fullName}</td>
                <td>{user?.department}</td>
                <td>{user?.position}</td>
                <td>
                  <Link className={`${classes.btn} ${classes.btn__edit}`} to={`/user/${user.id}`}>
                    Edit
                  </Link>
                </td>
                <td>
                  <button className={`${classes.btn} ${classes.btn__delete}`} onClick={() => handleDeleteConfirm(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Form hỏi xác nhận xóa */}
      {confirmDelete && (
        <div className="confirm-delete-form">
          <p>Are you sure you want to delete this user?</p>
          <button onClick={handleDeleteUser}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
    </div>
  );
};

export default UserList;

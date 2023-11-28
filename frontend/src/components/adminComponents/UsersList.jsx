import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  useBlockUserMutation,
  useUnblockUserMutation,
} from "../../slices/adminApiSlice";
import ConfirmationModal from "../ConfirmationModal";

const UsersList = () => {
  const [actualData, setActualData] = useState([]);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const [blockUser] = useBlockUserMutation();
  const [unblockUser] = useUnblockUserMutation();
  const [refresher, setRefresher] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [length,setLength]=useState(0)

  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostPerPage]=useState(10);

  const filteredUsers = actualData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const fetchUserData = async () => {
    try {
      const response = await axios.get("/api/admin/users");
      setActualData(response.data);
      setLength(response.data.length)
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Error fetching user data");
    }
  };

  useEffect(() => {
    // Fetch user data from the backend
    fetchUserData();
  }, [refresher]);

  const handleBlockUser = async (userId) => {
    const confirmBlock = window.confirm(
      "are you sure you want to block this user?"
    );
    if (confirmBlock) {
      try {
        await blockUser({ userId });

        toast.success("user blocked");

        setRefresher((prev) => !prev);
      } catch (err) {
        console.error("Error blocking user:", err);
        // Show an error toast
        toast.error("An error occurred while blocking the user.");
      }
    }
  };

  const handleUnBlockUser = async (userId) => {
    const confirmUnblock = window.confirm(
      "Are you sure you want to unblock this user?"
    );
    if (confirmUnblock) {
      try {
        await unblockUser({ userId });
        toast.success("User unblocked successfully");
        // Refetch user data and update state after unblocking
        setRefresher((prev) => !prev);
      } catch (err) {
        console.error("Error unblocking user:", err);
        // Show an error toast
        toast.error("An error occurred while unblocking the user.");
      }
    }
  };

  const indexOfLastPost=currentPage*postsPerPage;
  const indexOfFirstPost=indexOfLastPost-postsPerPage;
  const currentPosts=filteredUsers.slice(indexOfFirstPost,indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800">Users List</h2>

      <div className="overflow-x-auto mt-2">
      <div className=" mb-5 w-full md:text-center text-centet lg:text-left ">
        <input
          type="text"
          className="h-7  rounded-lg p-2 bg-gray-400 w-80 text-gray-600 placeholder:text-white"
          placeholder="enter user name or email to search...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button className="bg-red-700 text-sm h-7  rounded-lg ml-1 p-1 text-white">search</button> */}
      </div>
        <table className="min-w-full bg-white border border-gray-300 rounded shadow">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((user, index) => (
              <tr
                key={user._id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-2 px-4 text-center">{user._id}</td>
                <td className="py-2 px-4 text-center">{user.name}</td>
                <td className="py-2 px-4 text-center">{user.email}</td>
                <td className="py-2 px-4 text-center">
                  {user.blocked ? (
                    <button
                      onClick={() => handleUnBlockUser(user._id)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mr-2"
                    >
                      Unblock
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBlockUser(user._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2"
                    >
                      Block
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {length>postsPerPage ? (        <div className="mt-4 flex justify-center">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      >
        Previous
      </button>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={indexOfLastPost >= actualData.length}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div>):null }

      </div>
    </div>
  );
};

export default UsersList;
import React from "react";
import NavbarUser from "../components/NavbarUser"
import { useNavigate } from "react-router-dom"
import { useMutation, gql } from "@apollo/client";
import UserProfile from "../components/UserProfile";

const UserProfilePage = () => {

    const nav = useNavigate();

    const {data, loading, error} = useMutation(LOGIN_USER)

    const handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        nav("/");
    }

  return (
        <div>
            <NavbarUser />
            <UserProfile user={data} />
        </div>
  )
}

const USER_DETAILS = gql`
    query {
        user {
        name
        contact
        email
        }
    }
`

export default UserProfilePage
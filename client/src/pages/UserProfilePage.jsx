import React from "react";
import NavbarUser from "../components/NavbarUser"
import { useNavigate } from "react-router-dom"
import { useQuery, gql } from "@apollo/client";
import UserProfile from "../components/UserProfile";

const UserProfilePage = () => {

    const nav = useNavigate();

    const {data} = useQuery(USER_DETAILS)

    if (data) {
        console.log(data)
    }


    // pass the user data to the UserProfile component
    if (data) {
        return (
            <div>
                <NavbarUser />
                    <UserProfile user={data.user} />
            </div>
        )
    } else {
        return (
            <div>
                <NavbarUser />
                <h1>Loading...</h1>
            </div>
        )
    }
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
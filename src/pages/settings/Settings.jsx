import "./settings.css";
import SideBar from "../../components/sidebar/SideBar";
import { useContext, useState } from "react";
import Context from "../../context/Context";
import {axiosInstance} from "../../config";
import axios from "axios";

export default function Settings() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const { user, dispatch } = useContext(Context);
    const PF = "https://jenlog.herokuapp.com/api/images/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name; //create new file name using date (random)
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                // await axiosInstance.post("/upload", data);
                // await axios.post("https://jenlog.herokuapp.com/api/upload", data);
                await axios.post("https://jenlog.herokuapp.com/api/upload", data);
            } catch (err) { }
        }
        try {
            // const res = await axiosInstance.put("/users/" + user._id, updatedUser);
            // const res = await axios.put("https://jenlog.herokuapp.com/api/users/" + user._id, updatedUser);
            const res = await axios.put("https://jenlog.herokuapp.com/api/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };


    return (
        <div className="settings">
            <div className="settingsWrapper">

                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">??? Update Your Account ???</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        {file ? (
                            <img className="topImg"
                                src={URL.createObjectURL(file)}
                                alt="" />
                        ) : user.profilePic ? (

                            <img className="topImg"
                                src={PF + user.profilePic}
                                alt="" />
                        ) : (
                            <img className="topImg"
                                src={require("../../asset/img/defaultProfilePic.jpg")}
                                alt="" />
                        )}

                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="settingsSubmit" type="submit">
                        Update
                    </button>
                    {success && <span className="settingMessage">Profile has been updated...</span>}
                </form>
            </div>
            <SideBar />
        </div>
    )
}


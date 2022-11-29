import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./home.css";
import {axiosInstance} from "../../config";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const[posts, setPosts] = useState([]);
  const {search} = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jenlog.herokuapp.com/api/posts" + search);
      // const res = await axiosInstance.get("/posts" + search);
      // const res = await axios.get("https://jenlog.herokuapp.com/api/posts" + search);
      // const res = await axios.get("/posts" + search);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search]);
   return (
    <>
      <Header className="header"/>
      <div className="home">
        <Posts posts={posts}/>
        <SideBar />
      </div>
    </>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineEye, AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../../helper/ToastNotify";

const Card = ({
  image,
  title,
  content,
  publish_date,
  author,
  id,
  comment_count,
  likes,
  post_views,
  likes_n,
  getCard,
}) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { likeUnlike } = useBlogCalls();
  const like =
    likes_n?.filter((item) => item.user_id == user?._id).length && "text-danger";
  // console.log(like);
  
  const handleClick = () => {
    if (user) {
      likeUnlike(id);
      setTimeout(() => {
        getCard();
      }, 1000);
    } else {
      toastWarnNotify("You must login first.");
      navigate("/login");
    }
  };



  return (
    <div className="card p-4" style={{ width: "300px", maxHeight: "70vh" }}>
      <img src={image} className="card-img-top h-25 card-img" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content.slice(0, 20)}...</p>
        <p className="card-text">
          {publish_date}
        </p>
        <p className="card-text">
          {" "}
          <BsFillPersonFill className="fs-2" />
          {author}
        </p>
        <div>
          <div className="d-flex align-items-center gap-2 ">
            <AiFillHeart
              className={"fs-4 " + like}
              role="button"
              onClick={handleClick}
            />
            <span>{likes}</span>
            <BiComment className="fs-4" />
            <span>{comment_count}</span>
            <AiOutlineEye className="fs-4" />
            <span>{post_views}</span>
          </div>

          <button
            className="btn btn-primary mt-2 "
            onClick={() => {
              navigate(`/detail/${id}`);
              !user && toastWarnNotify("You must login first.");
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

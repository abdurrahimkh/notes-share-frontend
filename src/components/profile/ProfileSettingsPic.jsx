import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePicture } from "../../redux/features/auth/authAction";

const ProfileSettingsPic = ({ data }) => {
  const dispatch = useDispatch();
  const [inputImage, setInputImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const ImageInputRef = useRef();
  const { isLoading } = useSelector(state => state.auth);

  useEffect(() => {
    if (inputImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(inputImage);
    } else {
    }
  }, [inputImage]);

  const updatePic = () => {
    if (inputImage) {
      dispatch(updatePicture(inputImage));
    }
  };
  return (
    <div className="flex flex-col relative ">
      <img
        className="h-48 md:w-48 md:h-48 object-cover "
        src={preview ? preview : data?.user.pic}
      />
      <button
        className=" btn glass absolute top-36 w-full   "
        onClick={() => ImageInputRef.current.click()}
      >
        Change
      </button>
      <input
        type="file"
        className="hidden"
        ref={ImageInputRef}
        accept="image/*"
        onChange={e => setInputImage(e.target.files[0])}
      />
      <button onClick={updatePic} className="btn btn-success mt-2">
        {isLoading ? (
          <i className="bi bi-arrow-clockwise"></i>
        ) : (
          <i className="bi bi-image mr-2"></i>
        )}
        Update
      </button>
    </div>
  );
};

export default ProfileSettingsPic;

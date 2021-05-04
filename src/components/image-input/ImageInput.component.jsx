import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { ProfileImage } from "./ImageInput.styles";
import { writeUserImage } from "../../firebase/firebase.utils";
import placeholderImg from "../../assets/user.svg";

class ImageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: null,
      file: null,
    };
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    const { imagePreviewUrl, file } = this.state;
    console.log(imagePreviewUrl);
    return (
      <>
        <ProfileImage
          src={imagePreviewUrl ? imagePreviewUrl : placeholderImg}
        ></ProfileImage>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => this.handleImageChange(e)}
        />
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ImageInput);

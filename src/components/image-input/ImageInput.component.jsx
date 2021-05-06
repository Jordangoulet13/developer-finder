import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { ProfileImage } from "./ImageInput.styles";
import { writeUserImage } from "../../firebase/firebase.utils";
import placeholderImg from "../../assets/user.svg";
import CustomButton from "../custom-button/custom-button.component";
import { storage } from "../../firebase/firebase.utils";

class ImageInput extends React.Component {
  constructor() {
    super();
    this.state = {
      image: null,
      file: null,
      progress: 0,
      imageUrl: null,
    };
  }
  handleUpload = (e) => {
    e.preventDefault();
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressed = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress: progressed });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ imageUrl: url });
          });
      }
    );
  };

  handleChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: reader.result,
        image: file,
        imageUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  componentDidMount() {
    this.setState({ imageUrl: this.props.currentUser.image });
  }

  componentDidUpdate(prevState) {
    if (prevState.imageUrl !== this.state.imageUrl) {
      writeUserImage(this.props.currentUser.id, this.state.imageUrl);
    }
  }
  render() {
    const { image, file, progress, imageUrl } = this.state;
    // console.log(imageUrl);
    return (
      <>
        <ProfileImage src={imageUrl ? imageUrl : placeholderImg}></ProfileImage>
        <form className="profile-form" onSubmit={this.handleUpload}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => this.handleChange(e)}
          />
          <CustomButton type="submit">Update Pic</CustomButton>
        </form>
        <progress value={progress} max="100" />
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ImageInput);

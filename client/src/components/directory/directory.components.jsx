import React from "react";

import MenuItem from "../menu-item/menu-item.components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import "./directory.styles.scss";

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({ storage }) => (
  <DirectoryMenuContainer>
    {storage.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);
const mapStateToProps = createStructuredSelector({
  storage: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);

import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useUserProfileQuery } from "../../redux/features/document/documentApi";
import ProfileSettingsInput from "./ProfileSettingsInput";
import ProfileSettingsPic from "./ProfileSettingsPic";

const ProfileSettings = () => {
  const { _id } = JSON.parse(localStorage.getItem("user"));
  const { data } = useUserProfileQuery(_id);

  return (
    <div className="h-screen">
      <div className="container px-4 pt-3 md:ml-28 md:flex md:px-0 md:pt-10 ">
        <ProfileSettingsPic data={data} />
        <div className="divider divider-horizontal"></div>
        <ProfileSettingsInput data={data} />
      </div>
    </div>
  );
};

export default ProfileSettings;

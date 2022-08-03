import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useUserProfileQuery } from "../../redux/features/document/documentApi";
import ProfileSettingsInput from "./ProfileSettingsInput";
import ProfileSettingsPic from "./ProfileSettingsPic";

const ProfileSettings = () => {
  const { _id } = JSON.parse(localStorage.getItem("user"));
  const { data, isFetching } = useUserProfileQuery(_id);

  return (
    <div className="w-screen h-screen">
      <div className="container px-4 md:pl-28 pt-3 md:pt-10 md:flex ">
        <ProfileSettingsPic data={data} />
        <div className="divider divider-horizontal"></div>
        <ProfileSettingsInput data={data} />
      </div>
    </div>
  );
};

export default ProfileSettings;

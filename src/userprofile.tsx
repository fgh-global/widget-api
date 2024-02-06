/*!
 * Copyright 2023, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



import React, { useEffect, useState, FunctionComponent, ReactElement } from "react";
import { BlockAttributes, SBUserProfile, WidgetApi } from "widget-sdk";

/**
 * React Component
 */
export interface UserprofileProps extends BlockAttributes {
  widgetApi: WidgetApi; 
}

export const Userprofile: FunctionComponent<UserprofileProps> = ({ widgetApi }: UserprofileProps): ReactElement => {

  const [user, setUser] = React.useState<SBUserProfile>();
  
  useEffect(() => {
    widgetApi.getUserInformation().then((info) => {
      setUser(info);
    });
  }, []);
  
  return ( 
    <div>
    { user ? 
      <div>
        <h1 style={{ marginBottom: 10 }}>
           {user.firstName} {user.lastName} 🎉
        </h1>
        <p style={{}}> {user.location} {user.department} </p>
      </div>
      : 
      <div>hello </div>
    }
  </div>
  );
};



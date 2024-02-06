// /*!
//  * Copyright 2023, Staffbase GmbH and contributors.
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *     http://www.apache.org/licenses/LICENSE-2.0
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */

import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
// import React, { useEffect, useState, FunctionComponent, ReactElement } from "react";
// import { SBUserProfile, UserListItem, WidgetApi } from "widget-sdk";

// export interface CustomWidgetProps {
//   widgetApi: WidgetApi;
// }

// export const CustomWidget: FunctionComponent<CustomWidgetProps> = ({ widgetApi }: CustomWidgetProps): ReactElement => {

//   const [user, setUser] = React.useState<SBUserProfile>();
  
//   useEffect(() => {
//     widgetApi.getUserInformation().then((info) => {
//       setUser(info);
//     });
//   }, []);
  
//   return ( 
//     <div>
//     { user ? 
//       <div>
//         <h1 style={{ marginBottom: 10 }}>
//            {user.firstName} {user.lastName} 🎉
//         </h1>
//         <p>is from the {user.location} office and works in the {user.department} department.</p>
//       </div>
//       : 
//       null 
//     }
//   </div>
//   );
// };



// // import React, { useEffect, useState, FunctionComponent, ReactElement } from "react";
// // import { SBUserProfile, WidgetApi } from "widget-sdk";

// // export interface CustomWidgetProps {
// //   widgetApi: WidgetApi;
// // }

// // export const CustomWidget: FunctionComponent<CustomWidgetProps> = ({ widgetApi }: CustomWidgetProps): ReactElement | null => {

// //   const [user, setUser] = useState<SBUserProfile | null>(null);
  
// //   useEffect(() => {
// //     widgetApi.getUserInformation().then((user) => {
// //       setUser(user);
// //     });
// //   }, []);

// //   if(!user){
// //     return null;
// //   }
// //   return (
// //       <div>
// //         <h1 style={{ marginBottom: 10 }}>
// //            {user.firstName} {user.lastName} 🎉
// //         </h1>
// //         <p> {user.location} {user.department} </p>
// //       </div>
// //   );
// // };

// /**
//  * schema used for generation of the configuration dialog
//  * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
//  */
export const configurationSchema: JSONSchema7 = {
};

// // /**
// //  * schema to add more customization to the form's look and feel
// //  * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
// //  */
export const uiSchema: UiSchema = {
};


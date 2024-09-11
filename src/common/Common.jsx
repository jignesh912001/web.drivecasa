import { HOST_API } from "src/config-global";
import { paths } from "src/routes/paths";

export const zipCodeRegex = /^[0-9]{5}(?:[-\s][0-9]{4})?$/;

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const HIDE_COLUMNS_TOGGLABLE = ['category', 'actions'];

export function getSchoolValues(data, AllSchools) {
  let arr = [];
  const schoolMap = new Map();

  // Create a lookup map for AllSchools based on the Text property
  AllSchools?.forEach((item1) => {
    schoolMap.set(item1?.Text, item1?.Values);
  });

  // Use the lookup map to find and push values to arr
  data?.forEach((item) => {
    if (schoolMap.has(item)) {
      arr.push(schoolMap.get(item));
    }
  });

  return arr;
}

export const findSchoolTextArray = (schools, valueString) => {

  let filterValues = valueString.split(',').map(Number);

  // Filter the original array based on filterValues
  let filteredArr = schools.filter(item => filterValues.includes(item.Values));

  // Extract the 'Text' values from filteredArr
  let result = filteredArr.map(item => item.Text);

  return result;
};

export const findTextArray = (schools, valueString) => {

  let filterValues = valueString.split(',');

  return filterValues;
};

export const findCategoryText = (categories, valueString) => {

  let filterValues = valueString.split(',').map(Number);

  // Filter the original array based on filterValues
  let filteredArr = categories.filter(item => filterValues.includes(item.Values));

  // Extract the 'Text' values from filteredArr
  let result = filteredArr.map(item => item.Text);

  return result;
};

export function convertStringToFileObject(filePath) {
  // Extract the file name from the string
  const fileName = filePath.substring(filePath.lastIndexOf('/') + 1);

  // Create a blob URL for preview
  const previewURL = `${HOST_API}/${filePath}`

  // Get the current date for lastModified and lastModifiedDate
  const currentDate = new Date();

  // Define the object with the given and assumed properties
  const fileObject = {
    path: fileName,
    preview: previewURL,
    lastModified: currentDate.getTime(),
    lastModifiedDate: currentDate,
    name: fileName,
    size: 90270, // Assume the size if known
    type: "image/png",
    webkitRelativePath: ""
  };
  return fileObject;
}

export function findCategoryId(data, AllSchools) {
  let arr = [];
  const schoolMap = new Map();

  // Create a lookup map for AllSchools based on the Text property
  AllSchools?.forEach((item1) => {
    schoolMap.set(item1?.Text, item1?.Values);
  });

  // Use the lookup map to find and push values to arr
  data?.forEach((item) => {
    if (schoolMap.has(item)) {
      arr.push(schoolMap.get(item));
    }
  });

  return arr;
}


export const findTypeId = (allTypes, vendorTypeID) => {
  let id = "";
  allTypes?.forEach((item) => {
    if (item?.Text === vendorTypeID) {
      id = item?.Values;
    }
  });
  return id;
};

export const findTypeText = (allTypes, value) => {
  const type = allTypes.find(item => Number(item?.Values) === Number(value));
  return type ? type.Text : ""; // Return the Text if found, otherwise return null
};

export const findVendorName = (VendorList, value) => {
  const type = VendorList?.find(item => Number(item?.VendorID) === Number(value));
  return type ? type.VendorName : ""; // Return the Text if found, otherwise return null
};


export const Month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export function getMonths(length) {
  if (length > Month?.length) {
    length = Month?.length; // Limit the length to the maximum number of months available
  }
  return Month?.slice(0, length);
}

export const MonthList = Month.map((month, index) => ({
  Text: month,
  value: index + 1,
}));

export const getCurrentMonthShortName = () => {
  const currentMonthIndex = new Date().getMonth();
  let obj = MonthList.find(item => item?.value === currentMonthIndex + 1)
  return obj;
};

const generateYearList = (startYear) => {
  const currentYear = new Date().getFullYear();
  const yearList = [];

  for (let year = startYear; year <= currentYear; year++) {
    yearList.push(year.toString());
  }

  return yearList;
};

export const YearList = generateYearList(2020);

export const createFilesArray = (data) => {
  return [
    ...(data.W9Upload ? [
      {
        VendorFilesID: 0,
        FileType: 'W9Upload',
        FilePath: data.W9Upload?.includes(HOST_API) ? data.W9Upload.replace(HOST_API, "") : data.W9Upload,
        filName: data?.FirstFile?.path ? data?.FirstFile?.path : data?.FirstFile,
        IsChange: data?.FirstFile?.path ? true : false
      }
    ] : []),
    ...(data.Logo ? [
      {
        VendorFilesID: 0,
        FileType: 'Logo',
        FilePath: data.Logo?.includes(HOST_API) ? data.Logo.replace(HOST_API, "") : data.Logo,
        filName: data?.SecondFile?.path ? data?.SecondFile?.path : data?.SecondFile,
        IsChange: data?.SecondFile?.path ? true : false
      }
    ] : []),
    ...(data.Profile ? [
      {
        VendorFilesID: 0,
        FileType: 'Profile',
        FilePath: data.Profile?.includes(HOST_API) ? data.Profile.replace(HOST_API, "") : data.Profile,
        filName: data?.ThirdFile?.path ? data?.ThirdFile?.path : data?.ThirdFile,
        IsChange: data?.ThirdFile?.path ? true : false
      }
    ] : []),
  ];
};

export function formatDate(dateStr) {
  // Create a new Date object from the date string
  let date = new Date(dateStr);

  // Get the day, month, and year from the Date object
  let day = date.getDate();
  let month = Month[date.getMonth()];
  let year = date.getFullYear();

  // Format the date string
  let formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}

export function formatDateToYYYYMMDD(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1 and pad with leading zero if needed
  const day = String(date.getDate()).padStart(2, '0'); // Pad with leading zero if needed

  return `${year}-${month}-${day}`;
}

export function formatDateTime(dateString) {
  let date = new Date(dateString);

  let formattedDate = date.getFullYear() + '/' +
    ('0' + (date.getMonth() + 1)).slice(-2) + '/' +
    ('0' + date.getDate()).slice(-2) + ' ' +
    ('0' + date.getHours()).slice(-2) + ':' +
    ('0' + date.getMinutes()).slice(-2) + ':' +
    ('0' + date.getSeconds()).slice(-2);

  return formattedDate;
}

export function extractFilename(path) {
  // Split the string by the '/' character
  const parts = path?.split('/');
  // Return the last part of the array which is the filename
  return parts[parts.length - 1];
}

export function convertToDecimal(number) {
  if (number === 0) {
    return 0
  }
  if (number) {
    if (isNaN(number)) {
      throw new Error("Input is not a valid number");
    }
    return Number(number).toFixed(2);
  }
}

export function formatToUSCurrency(number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number);
}


export const phoneMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

export const phoneRegExp = /^\(\d{3}\) \d{3}-\d{4}$/;

export const REPORT_LIST = [
  {
    Name: "Invoice Report",
    value: 1
  },
  {
    Name: "AP Aging Report",
    value: 2
  },
  {
    Name: "Invoice Payment History Report",
    value: 3
  },
  {
    Name: "Summary Report",
    value: 4
  }
]

export const createArrFromAllSchools = (AllSchools) => {
  let arr = [{ id: "ModuleName", label: "Module Name" }];

  AllSchools?.forEach((item) => {
    let obj = { id: item?.Values, label: item?.Text };
    arr.push(obj);
  });

  return arr;
};

export const createSchoolDataArray = (AllSchools, data) => {
  let arr = [];

  AllSchools?.map((item) => {
    data?.map((mod) => {
      let obj = {
        ...mod,
        schoolId: item?.Values,
        view: false,
        create: false,
        edit: false,
        delete: false,
      };
      arr.push(obj);
    });
  });

  return arr;
};


export const UserAccessCheckBoxes = (modules, schools) => {
  const flattenedArray = [];

  modules?.forEach(module => {
    if (module?.ForCheckBox && module?.ForCheckBox.length > 0) {
      const alldata = schools?.map(school => ({
        moduleID: module?.ModuleID,
        SchoolID: school?.Values,
        IsCreate: false,
        IsView: false,
        IsEdit: false,
        IsDelete: false,
        IsAudit: false,
        IsApprove: false,
        IsPrint: false,
        IsExport: false,
      }));
      flattenedArray.push(...alldata.flat());
    }

    if (module.SubModule && module.SubModule.length > 0) {
      const subModuleCheckboxes = UserAccessCheckBoxes(module.SubModule, schools);
      flattenedArray.push(...subModuleCheckboxes);
    }
  });

  return flattenedArray;
};

export const ApprovalStatusList = [
  {
    name: "Pending",
    value: 0
  },
  {
    name: "Approve",
    value: 1
  }
]

export const PaymentStatusList = [
  {
    name: "Pending",
    value: 0
  },
  {
    name: "Paid",
    value: 1
  },
  {
    name: "Partial Paid",
    value: 2
  }
]

export function buildMenu(permissionData, ICONS, t) {
  const arr = [];

  const createMenuItem = (title, path, icon = null, children = null) => ({
    title: t(title),
    path,
    ...(icon && { icon }),
    ...(children && { children })
  });

  permissionData?.forEach(main => {
    if (main?.SubModule?.length > 0) {
      const arr1 = [];
      const arr3 = [];

      main?.SubModule?.forEach(submenu => {
        if (submenu?.SubModule?.length > 0) {
          const arr2 = submenu?.SubModule?.reduce((acc, sub) => {
            if (submenu?.PageName === "Vendors") {
              if (sub?.IsView) {
                const pathsMapping = {
                  "Vendor List": paths.vendor.root,
                  "Purchase Orders": paths.PurchaseOrder.root,
                  "Invoices": paths.invoice.root,
                  // "Invoice Approvals": paths.InvoiceApproval.root,
                  "Payments": paths.Approval.root,
                  "Receipts": paths.Receipts.root,
                };
                if (pathsMapping[sub?.PageName]) {
                  acc.push(createMenuItem(sub?.PageName, pathsMapping[sub?.PageName]));
                }
              }
            } else if (submenu?.PageName === "Vendor Reports") {
              if (sub?.IsView) {
                const pathsMapping = {
                  "Invoices": paths.Report.Invoice,
                  "AP Aging": paths.Report.APAging,
                  "Invoice Payment History": paths.Report.PaymentHistory,
                  "Summary": paths.Report.Summary
                };
                if (pathsMapping[sub?.PageName]) {
                  acc.push(createMenuItem(sub?.PageName, pathsMapping[sub?.PageName]));
                }
              }
            }
            else if (submenu?.PageName === "Pedagogy") {
              if (sub?.IsView) {
                const pathsMapping = {
                  "Projection": paths.Pedagogy.Projection.root,
                };
                if (pathsMapping[sub?.PageName]) {
                  acc.push(createMenuItem(sub?.PageName, pathsMapping[sub?.PageName]));
                }
              }
            }
            else if (submenu?.PageName === "Illness") {
              if (sub?.IsView) {
                const pathsMapping = {
                  "Student Illness Reports": paths.Illness.Student.root,
                };
                if (pathsMapping[sub?.PageName]) {
                  acc.push(createMenuItem(sub?.PageName, pathsMapping[sub?.PageName]));
                }
              }
            }
            else if (submenu?.PageName === "Food") {
              if (sub?.IsView) {
                const pathsMapping = {
                  "Manage Daily Meals": paths.Food.Meal.root,
                };
                if (pathsMapping[sub?.PageName]) {
                  acc.push(createMenuItem(sub?.PageName, pathsMapping[sub?.PageName]));
                }
              }
            }
            else if (submenu?.PageName === "Manage Students") {
              if (sub?.IsView) {
                const pathsMapping = {
                  "Student Food Preferences": paths.Admin.ManageStudents.root,
                };
                if (pathsMapping[sub?.PageName]) {
                  acc.push(createMenuItem(sub?.PageName, pathsMapping[sub?.PageName]));
                }
              }
            }
            return acc;
          }, []);

          if (arr2.length > 0) {
            const menuItem = createMenuItem(
              submenu?.PageName,
              submenu?.PageName === "Vendors" ? paths.vendor.root :
                submenu?.PageName === "Vendor Reports" ? paths.Report.Invoice :
                  submenu?.PageName === "Pedagogy" ? paths.Pedagogy.Projection.root :
                    submenu?.PageName === "Food" ? paths.Food.Meal.root :
                      submenu?.PageName === "Illness" ? paths.Illness.Student.root :
                        submenu?.PageName === "Manage Students" ? paths.Admin.ManageStudents.root :
                          "",
              submenu?.PageName === "Vendors" ? ICONS.vendor : ICONS.user,
              arr2
            );
            arr1.push(menuItem);
          }
        } else {
          const singlePathsMapping = {
            "Vendor Dashboard": { path: paths.dashboard.root, icon: ICONS.dashboard },
            "Users": { path: paths.User.root, icon: ICONS.user },
            "User Access": { path: paths.UserAccess.root, icon: ICONS.approval },
          };
          if (submenu?.IsView && singlePathsMapping[submenu?.PageName]) {
            const { path, icon } = singlePathsMapping[submenu?.PageName];
            arr3.push(createMenuItem(submenu?.PageName, path, icon));
          }

          let singlePath = {
            "Incident Reports": { path: paths.Incident.root, icon: ICONS.blog },
            "Email": { path: paths.Email.root, icon: ICONS.mail },
          }

          if (singlePath[submenu?.PageName]) {
            const { path, icon } = singlePath[submenu?.PageName];
            arr1.push(createMenuItem(submenu?.PageName, path, icon));
          }
        }
      });

      if (arr1.length > 0) {
        arr.push({ subheader: t(main?.PageName), items: arr1 });
      }
      if (arr3.length > 0) {
        arr.push({ subheader: t(main?.PageName), items: arr3 });
      }
    }
  });
  return arr;
}


export function handlePermission(result, targetPageName, subPageName) {
  let obj = {};

  function checkAndAssignProperties(module) {
    if (module?.PageName === targetPageName) {
      obj = {
        IsAudit: module?.IsAudit,
        IsCreate: module?.IsCreate,
        IsDelete: module?.IsDelete,
        IsExport: module?.IsExport,
        IsPrint: module?.IsPrint,
        IsEdit: module?.IsEdit
      };
      return true; // Found the target page, no need to search further
    }
    return false;
  }

  function traverseModules(modules) {
    for (let module of modules) {
      if (module?.SubModule?.length > 0) {
        if (module?.PageName === subPageName) {
          if (checkAndAssignProperties(module)) {
            return true; // Found the target page, no need to search further
          }
          if (module.SubModule.some(subModule => checkAndAssignProperties(subModule))) {
            return true; // Found in submodules, no need to search further
          }
        } else {
          if (traverseModules(module.SubModule)) {
            return true; // Found in nested submodules, no need to search further
          }
        }
      } else {
        if (checkAndAssignProperties(module)) {
          return true; // Found the target page, no need to search further
        }
      }
    }
    return false;
  }

  traverseModules(result);

  return obj;
}

export function findModuleByID(arr, id) {
  for (const module of arr) {
    if (module.ModuleID === id) {
      return module;
    }
    if (module.SubModule && module.SubModule.length > 0) {
      const found = findModuleByID(module.SubModule, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
}


export function findPath(module) {
  switch (module.ModuleID) {
    case 1:
      return paths.dashboard.root
    case 2:
      return paths.vendor.root
    case 3:
      return paths.invoice.root
    case 4:
      return paths.Approval.root
    case 7:
      return paths.User.root
    case 8:
      return paths.UserAccess.root
    case 10:
      return paths.Receipts.root
    case 11:
      return paths.PurchaseOrder.root
    case 12:
      return paths.InvoiceApproval.root
    case 19:
      return paths.Report.Invoice
    case 20:
      return paths.Report.APAging
    case 21:
      return paths.Report.PaymentHistory
    case 22:
      return paths.Report.Summary
    case 24:
      return paths.Incident.root
    case 26:
      return paths.Illness.Student.root
    case 28:
      return paths.Food.Meal.root
    default:
      return paths.dashboard.root
  }
}

function generateRandomStringWithID(id, length = 8) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result + id;
}

let id = 128;
let randomString = generateRandomStringWithID(id);

let str = btoa(randomString);
// console.log('str', str)
let data = atob(str);

let integerValue = parseInt(data?.replace(/\D/g, ''), 10);


export const ManageIncidentSteps = [
  'Student and Incident Information',
  // 'Incident/Accident Information',
  'Immediate Support and Submit',
  // 'Outside Treatment information (If applicable)',
  'Leadership Approval and Notification',
  // 'Signature',
  // 'Notification',
  // 'DCFS Notification (if applicable)',
];

export const StudentIllnessDetailSteps = [
  'Student and Illness Information',
  // 'Illness Information',
  'Notification and Return Terms',
  // 'Notes From School',
  // 'Return Terms',
];

export const TimeOffRequestStep = [
  'Time-off Request Information',
  // 'Illness Information',
  'Decision and Notification',
  // 'Notes From School',
  // 'Return Terms',
];


export const GENDER = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
];

export const ANSWER = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];


export const ClassRoomList = [
  'Baby Nido',
  'Nido',
  'Class of 2s - A',
  'Class of 2s - B',
  'Class of 3s - A',
  'Class of 3s - B',
  'Class of 4s - A',
  'Class of 4s - B',
  'Kindergarten',
  'School Age',
  'Bus 1',
  'Bus 2',
  'Bus 3'
]

export const ChildNameList = [
  'Avery Parbol',
  'Billie Tinnes',
  'Marianne Earman',
  'Sal Pindell',
  'Valerie Pou',
  'Roger Seid',
  'Naomi Caetano',
  'Mack Jurasin',
  'Mariano Maury',
  'Jill Doe',
  'Gracie Ehn',
  'Essie Vaill',
  'Shelley Groden'
]

export const LocationList = [
  'Atelier',
  'Baby Nido',
  'Class of 2s - A',
  'Class of 2s - B',
  'Class of 3s - A',
  'Class of 3s - B',
  'Class of 4s - A',
  'Class of 4s - B',
  'Kindergarten',
  'School Age',
  'Bus 1',
  'Bus 2',
  'Bus 3'
]

export const TypeOfIncidentList = [
  'Allergy/Sensitivity Reaction',
  'Bathroom Accident',
  'Biting',
  'Disruptive Behavior',
  'Emotional Outburst',
  'Inappropriate Language',
  'Open wound/cut Pain/Inflammation/Bump',
  'Injury',
  'Poisoning',
  'Respiratory Condition',
  'Seizure',
  'Sprain/Twist/Strain',
  'Throwing Things',
  'Temper Tantrum',
  'Other'
]

export const WitnessList = [
  'Abhijit Annaldas',
  'Aileen Mottern',
  'April O Brain',
  'Beverly Cambel',
  'Bryan Rovell',
  'Buster Wubbel',
  'Byron Fortuna',
  'Mariano Maury',
  'Jill Doe',
  'Gracie Ehn',
  'Essie Vaill',
  'Shelley Groden'
]

export const BodyPartaffectedList = [
  'Abdomen/Trunk/Chest/Back',
  'Arm',
  'Ear',
  'Eye',
  'Face',
  'Foot/Ankle',
  'Hand/Wrist/Finger',
  'Head',
  'Hip/Buttocks',
  'Knee',
  'Internal Injury',
  'Mouth/Tongue/Throat',
  'Neck',
  'Leg',
  'Shoulder'
]

export const SupportList = [
  'Called 911',
  'First Aid /CPR/Heimlich Procedure',
  'Monitored for physical reactions',
  'Guidance',
  'First Aid',
  'Other'
]

export const TreatMentList = [
  'Asthmatic Episode',
  'Allergic Reaction',
  'Bodily Fluid Exposure',
  'Breathing Problem',
  'Chemical Exposure',
  'Chronic Health Issue',
  'Drug or Alcohol',
  'Medication Reaction',
  'Seizure',
  'Other'
]

export const ParentList = [
  'Contact - Cavin Menal - Brother',
  'Contact - Pavani Kumat - Aunt',
  'Contact - Pavani Kumat - Family Friend',
  'Parent - Jon Doe - Father'
]

export const MethodList = [
  'Phone',
  'Email',
  'SMS',
  'Personal contact'
]

export const SignsList = [
  'Tired',
  'Flushing'
]


export const ProjectionList = [
  {
    Projection: 1,
    data: [
      {
        name: "context",
        Text: "We are establishing our classroom routine and rituals and love for learning.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Proposals",
        Text: "During Assembly we will (English, Spanish, Sign-Language) Sing Hello and ask who is here today as we look at our photos and put them on the board.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Intention",
        Text: "To strengthen relationships between peers, teachers, and classroom materials. For the children to become comfortable having back and forth conversations and topic related discussions with peers and teachers.For the children to learn and practice core values in early ages. For students to learn more about the season & to improve their vocabularies.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "TeachersHypothesis",
        Text: "We think the children will take some time getting used to sitting as a large group and respect each other. But in time, the more consistent we are, the children will be able to predict and enjoy Assembly.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Questionstoaskchildren",
        Text: "Who is not here today? What colors are we wearing today? What is your favorite color? How many people are here today?  Where is your picture?  How do you feel today? What is the weather like today? Is it sunny/ cloudy / rainy / windy / snowy ? What makes you feel happy ? ",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "ResearchInvestigations",
        Text: "Hands-on research and exploration of a book, tool, or material. Book",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Materials",
        Text: "Musical Instruments Mirrors Loose part materials Clay Art materials Gardening books Books about Mother’s Day Pipettes, baking soda, vinegar Felt story boards, puppets",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Area",
        Text: "Assembly Carpet",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "GroupingTeachersChildren",
        Text: "Large group",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "LearningObjectives",
        Text: "",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
    ]
  },

  {
    Projection: 2,
    data: [
      {
        name: "context",
        Text: "It is important to establish a healthy routine filled with physical activities in early childhood.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Proposals",
        Text: "Children will get the opportunity to use the balance beam outside at the playground.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Intention",
        Text: "For the children to help build coordination, posture, and muscle strength.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "TeachersHypothesis",
        Text: "We think children will put the core values together and begin to work with turn-taking, being patient, and showing respect to others while engaging in this experience. We think children will offer help if anyone is in need.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Questionstoaskchildren",
        Text: "Can you walk forward on the balance beam? How fast can you walk on the balance beam?  How far can you jump from the balance beam? Can you help your friend walk on the balance beam?",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "ResearchInvestigations",
        Text: "Songs/poems about bodies and movements. “Head, Shoulders, Knees, and Toes” Work with balance coordination activities",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Materials",
        Text: "Balance Beam",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Area",
        Text: "Playground",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "GroupingTeachersChildren",
        Text: "One child at a time on the balance beam",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "LearningObjectives",
        Text: "",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
    ]
  },

  {
    Projection: 3,
    data: [
      {
        name: "context",
        Text: "KLA believes in forming strong, warm, and nurturing relationships not just with the children but their parents as well. Mother’s Day celebration is a special event at KLA.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Proposals",
        Text: "Have discussions about what Mother’s Day is with the children. Read books about Mother’s Day, have children share why their mom is so special, and ways we can make mom happy. Invite children to make a special gift for their moms. Give children the freedom to decide the gift they want to share. It can be a drawing, painting, clay creation, bead necklace, or even a collage.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Intention",
        Text: "For the children to express respect, honor, and love towards their mothers. For the children to express their own personal gratitude to their mothers. For the children to improve creativity by creating gifts. For the children to practice core values.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "TeachersHypothesis",
        Text: "Why is your mom special to you? What makes your mommy happy? What is something mommy always says to you? What is her favorite thing to do? How do you know mom loves you?",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Questionstoaskchildren",
        Text: "Why is your mom special to you? What makes your mommy happy? What is something mommy always says to you? What is her favorite thing to do? How do you know mom loves you?",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "ResearchInvestigations",
        Text: "Reading Mother’s Day books and discussions. Family wall. Songs and poems.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Materials",
        Text: "Mother’s Day books and discussions. Family pictures.  Flowers Art materials Clay Beads Songs, poems, and quotes about mothers Tea party for mommy",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Area",
        Text: "All around the classroom",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "GroupingTeachersChildren",
        Text: "Large group discussions Small group experiences",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "LearningObjectives",
        Text: "",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
    ]
  },

  {
    Projection: 4,
    data: [
      {
        name: "context",
        Text: "Young children gather sensorial information in everything they experience and store the information in their subconscious.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Proposals",
        Text: "Children will be encouraged to use small wooden blocks to stack on top of each other. Shaving cream will be provided for the students to add between blocks when stacking to help add texture and stability.  Ask open-ended questions on how dipping blocks in shaving cream help stick blocks to another.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Intention",
        Text: "For the children to improve fine motor, engineering skills, encourage creativity, stimulate senses, and have them engaged in critical thinking.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "TeachersHypothesis",
        Text: "We think the children will enjoy touching the shaving cream and stacking the blocks. We think children will use their engineering skills to build houses, towers, castles, etc.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Questionstoaskchildren",
        Text: "How can you use shaving cream to stick the blocks together? If you add shaving cream, will the two blocks stick to each other? What are you going to make with the blocks?  How does it feel in your hands?",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "ResearchInvestigations",
        Text: "Hands-on research on sensorial material.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Materials",
        Text: "Shaving cream Colors small blocks Sensory table  Paintbrushes Art shirts",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Area",
        Text: "KLA Schools of Plainfield",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "GroupingTeachersChildren",
        Text: "Small groups of 2",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "LearningObjectives",
        Text: "",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
    ]
  },

  {
    Projection: 5,
    data: [
      {
        name: "context",
        Text: "The incorporation of science education provides children with endless opportunities to learn.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Proposals",
        Text: "Children will be invited to squeeze vinegar into the tray with baking soda and observe the reaction. Food coloring can be added at the bottom as a surprise. Provide paintbrushes for them for mixing in!",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Intention",
        Text: "For students to identify various attributes of objects and to have them make observations. For the children to strengthen muscles and coordination",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "TeachersHypothesis",
        Text: "We think children will share their thoughts and how they feel about their moms.We think children will love to hear Mother’s Day stories and make special gifts.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Questionstoaskchildren",
        Text: "Why is your mom special to you?What makes your mommy happy?What is something mommy always says to you?What is her favorite thing to do?How do you know mom loves you?",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "ResearchInvestigations",
        Text: "Reading Mother’s Day books and discussions.Family wall.Songs and poems.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Materials",
        Text: "Mother’s Day books and discussions. Family pictures. Flowers Art materials Clay Beads Songs, poems, and quotes about mothers Tea party for mommy",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Area",
        Text: "All around the classroom",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "GroupingTeachersChildren",
        Text: "Large group discussions Small group experiences",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "LearningObjectives",
        Text: "",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
    ]
  },

  {
    Projection: 6,
    data: [
      {
        name: "context",
        Text: "Young children gather sensorial information in everything they experience and store the information in their subconscious.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Proposals",
        Text: "Children will be encouraged to use small wooden blocks to stack on top of each other. Shaving cream will be provided for the students to add between blocks when stacking to help add texture and stability.  Ask open-ended questions on how dipping blocks in shaving cream help stick blocks to another.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Intention",
        Text: "For the children to improve fine motor, engineering skills, encourage creativity, stimulate senses, and have them engaged in critical thinking.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "TeachersHypothesis",
        Text: "We think the children will enjoy touching the shaving cream and stacking the blocks.We think children will use their engineering skills to build houses, towers, castles, etc.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Questionstoaskchildren",
        Text: "How can you use shaving cream to stick the blocks together?If you add shaving cream, will the two blocks stick to each other? What are you going to make with the blocks?",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "ResearchInvestigations",
        Text: "Hands-on research on sensorial material.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Materials",
        Text: "Shaving cream Colors small blocks Sensory table Paintbrushes Art shirts",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Area",
        Text: "Sensory table Outdoor classroom",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "GroupingTeachersChildren",
        Text: "Small groups of 2",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "LearningObjectives",
        Text: "",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
    ]
  },

  {
    Projection: 7,
    data: [
      {
        name: "context",
        Text: "The incorporation of science education provides children with endless opportunities to learn.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Proposals",
        Text: "Children will be invited to squeeze vinegar into the tray with baking soda and observe the reaction. Food coloring can be added at the bottom as a surprise. Provide paintbrushes for them for mixing in!",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Intention",
        Text: "For students to identify various attributes of objects and to have them make observations.For the children to strengthen muscles and coordination.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "TeachersHypothesis",
        Text: "We think children will be excited to see their reaction. We think children will be surprised to see the fizzing colors. We think children will use their hands to get the results of the experiment.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Questionstoaskchildren",
        Text: "What happens when you add vinegar to baking powder? Do you hear a frizzing sound? Does vinegar have a smell to it? How does the texture feel in your hands?",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "ResearchInvestigations",
        Text: "Hands-on research and exploration of the science experiments.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Materials",
        Text: "Baking soda Vinegar food coloring Pipettes Spray bottles filled with vinegar Paintbrushes Small containers or trays",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Area",
        Text: "Table by the mini atelier",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "GroupingTeachersChildren",
        Text: "Small groups of 4",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "LearningObjectives",
        Text: "",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
    ]
  },

  {
    Projection: 8,
    data: [
      {
        name: "context",
        Text: "KLA schools create opportunities for children to learn through gardening, engaging their natural curiosity, wonder about fruits, vegetables, and herbs.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Proposals",
        Text: "Continue to make observations and track the growth of the seeds into plants. When the seedlings have developed their second set of true leaves, transplant them in the ground.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Intention",
        Text: "For the children to learn about science and nature by growing their own food. For the children to promote healthy eating, responsibilities, patience, develop social skills and sensory development. Allow children to strengthen their core values as gardening provides a complete process.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "TeachersHypothesis",
        Text: "We think children enjoy touching dirt, planting, watering, and taking care of them. We think children will look forward to coming to school to make observations to the seeds they planted.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Questionstoaskchildren",
        Text: "How much watering do we have to do? What color are the plants? What do the plants look like? What shape are the leaves? What do the plants need to grow?",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "ResearchInvestigations",
        Text: "Hands-on research and exploration of the gardening process. Books about gardening",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Materials",
        Text: "Watering can Magnifying glass Gardening tools to transplant the plants into the ground.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Area",
        Text: "Garden",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "GroupingTeachersChildren",
        Text: "Small groups or large groups",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "LearningObjectives",
        Text: "",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
    ]
  },

  {
    Projection: 9,
    data: [
      {
        name: "context",
        Text: "Children at KLA explore with a wide variety of art materials and different art techniques.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Proposals",
        Text: "Children will be invited to an observational drawing of the plants. Place the plants on the table for the children to make closer observations. Provide magnifying glasses and art mediums.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Intention",
        Text: "For students to draw what they see in front of them as realistically and as true to life as possible.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "TeachersHypothesis",
        Text: "We think children will tend to look closely at the plants before starting to draw them. We think children will choose the same colors as they see.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Questionstoaskchildren",
        Text: "What did you draw? How can you add more details to the picture? What colors do you see? What shape are the leaves? What color is the dirt? What shape is the flowerpot?",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "ResearchInvestigations",
        Text: "Explore art mediums, photos, and paper with senses.Observe nature in the outdoor classroom",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Materials",
        Text: "Print papers Pencils, color pencils, crayons, markers, etc. Plants in the middle of the table",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Area",
        Text: "Table by the Mini Atelier",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "GroupingTeachersChildren",
        Text: "Small groups of 4",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "LearningObjectives",
        Text: "",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
    ]
  },

  {
    Projection: 10,
    data: [
      {
        name: "context",
        Text: "Kindness Curriculum Throughout the month of May we will be focusing on collaboration",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Proposals",
        Text: "We will focus on collaboration in the sense of taking turns. The children will be encouraged to use their words to ask friends for a turn with a toy.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Intention",
        Text: "The intention is for the children to use their words to ask for a toy or material.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "TeachersHypothesis",
        Text: "We think that some of the children will be able to use their words and ask friends for a turn while others will need some coaching from the teachers.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Questionstoaskchildren",
        Text: "I see “name” is playing with that toy that you want. What can we ask “name”?",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "ResearchInvestigations",
        Text: "Books about taking turns such as: Llama Llama taking turns, Time to share, and How do dinosaurs play with their friends.",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Materials",
        Text: "Classroom materials",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "Area",
        Text: "All areas of the classroom",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "GroupingTeachersChildren",
        Text: "Large and small groups",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
      {
        name: "LearningObjectives",
        Text: "",
        Questions: [
          {
            Que: "suggestion",
            ans: "",
          },
          {
            Que: "feedback",
            ans: "",
          }
        ]
      },
    ]
  },
]


export function convertMealData(obj, AllClassTypes, currentMeal) {

  return obj?.map((meal) => {
    let classTypeIDS = meal?.MealClassType?.[0]?.ClassTypeIDs;
    let valuesArray = classTypeIDS?.split(', ')?.map(Number);

    let RemainingClass = AllClassTypes
      .filter(item => valuesArray?.includes(item.Values))
      .map(item => item);
    let NotRemainClass = AllClassTypes
      .filter(item => !valuesArray?.includes(item.Values))
      .map(item => item);

    let str = RemainingClass?.length === AllClassTypes?.length ? [] : RemainingClass?.map(item => item?.Text).join(", ")
    let str1 = RemainingClass?.length === AllClassTypes?.length ? [] : NotRemainClass?.map(item => item?.Text).join(", ")
    let arr = []
    if (str && str1) {
      arr = [...str, ...str1]
    }
    return ({
      MealStandardTypeID: meal.MealStandardTypeID,
      MealDateDetailsID: currentMeal?.MealDateDetailsID,
      StandardTypeID: meal?.StandardTypeID,
      Name: meal?.Name,
      RemainingClass: RemainingClass,
      CombineClass: arr,
      MealClassType: meal?.MealClassType?.map((classType) => {
        let valuesArray = classType?.ClassTypeIDs?.split(', ').map(Number);

        let textNames = AllClassTypes
          .filter(item => valuesArray?.includes(item.Values))
          .map(item => item?.Text);

        let Name = textNames?.length === AllClassTypes?.length ? "AllClassType" : textNames?.join(", ");
        return {
          MealClassTypeID: 0,
          MealDateDetailsID: currentMeal?.MealDateDetailsID,
          MealStandardTypeID: classType?.MealStandardTypeID,
          ClassTypeIDs: classType?.ClassTypeIDs,
          name: Name,
          MealTypesDetails: classType.MealTypesDetails.map((typeDetail, typeIndex) => {
            return ({
              TBL_MealTypesDetailsID: 0,
              MealTypeName: typeDetail.MealTypeName,
              MealClassTypeID: 0,
              MealTypeID: typeDetail?.MealTypeID,
              MealDetails: typeDetail.MealDetails.map((detail, detailIndex) => ({
                id: typeDetail.TBL_MealTypesDetailsID + typeIndex + 1,
                MealName: detail.MealName,
                EntreeID: detail.EntreeID,
                MealTypeName: typeDetail.MealTypeName,
                mainEntree: detailIndex === 0 ? "main" : detail.MealName.replace("Free Alternative", ""),
                MealEntrees: detail.MealEntrees,
                Allergy: detail.Allergy,
                StudentCount: detail.Students?.length,
                Students: detail.Students
              }))
            })
          }
          )
        };
      })
    })
  }
  );
}


// Common function to generate AllClass array for a given MealStandardType object
export function generateAllClass(MealStandardType, AllClassTypes) {
  return MealStandardType?.MealClassType?.map((item) => {
    let valuesArray = item?.ClassTypeIDs?.split(', ')?.map(Number);
    let RemainingClass = AllClassTypes
      .filter(classType => valuesArray?.includes(classType.Values))
      .map(classType => classType?.Text);
    return RemainingClass?.length === AllClassTypes?.length
      ? "AllClassType"
      : RemainingClass?.join(", ");
  });
}

// Main function to generate MainTab array
export function generateMainTab(currentMeal, AllClassTypes) {
  return currentMeal?.MealDateWiseSchools?.[0]?.MealStandardType?.map((obj1) => ({
    standard: obj1?.Name,
    AllClass: generateAllClass(obj1, AllClassTypes)
  }));
}

// Age Calculate

export function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
  } else {
    return `${months} month${months !== 1 ? 's' : ''}`;
  }
}


export const ExcelDateFormate = (serial) => {

  // Check if the serial value is valid (not null, undefined, or falsey)
  if (!serial || isNaN(serial)) {
    return null;
  }

  const baseDate = new Date(1900, 0, 1);
  const days = Math.floor(serial);
  const fractionalDay = serial - days;
  const targetDate = new Date(baseDate);
  targetDate.setDate(baseDate.getDate() + days - 2); // Subtract 2 because Excel erroneously includes 1900 as a leap year
  const hours = Math.floor(fractionalDay * 24);
  const minutes = Math.floor((fractionalDay * 24 - hours) * 60);
  const seconds = Math.floor((((fractionalDay * 24 - hours) * 60) - minutes) * 60);

  // Set time on targetDate
  targetDate.setHours(hours, minutes, seconds);

  const date = new Date(targetDate);
  // Extract day, month, year, hours, minutes, and seconds
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getUTCFullYear();
  const hour = String(date.getUTCHours()).padStart(2, '0');
  const minute = String(date.getUTCMinutes()).padStart(2, '0');
  const second = String(date.getUTCSeconds()).padStart(2, '0');

  // Format the date into the desired format
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}




export const getDefaultStartDate = () => {
  const currentDate = new Date();
  const lastMonthDate = new Date(currentDate.setDate(currentDate.getDate() - 7));
  return lastMonthDate;
}


export const getDefaultLastOneYear = () => {
  const currentDate = new Date();
  const lastYearDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
  lastYearDate.setHours(0, 0, 0, 0);
  return lastYearDate;
}

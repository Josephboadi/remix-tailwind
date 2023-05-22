const staffRecodTableHeader = [
  {
    id: 1,
    title: 'ID',
    field: 'id',
    filtering: false,
  },
  {
    id: 2,
    title: 'NAME',
    field: 'name',
  },
  {
    id: 3,
    title: 'BRANCH',
    field: 'branch',
  },
  {
    id: 4,
    title: 'STATUS',
    field: 'status',
  },
  {
    id: 5,
    title: 'EMAIL STATUS',
    field: 'emailStatus',
  },
  {
    id: 6,
    title: 'ENROLL STAFF',
    field: 'enrollStaff',
  },
  {
    id: 7,
    title: 'GRANT SYSTEM ACCESS',
    field: 'grantSystemAccess',
  },
];

const systemRolesTableHeader = [
  {
    id: 1,
    title: 'ID',
    field: 'id',
    filtering: false,
  },
  {
    id: 2,
    title: 'ROLE TITLE',
    field: 'roleTitle',
  },
];

const systemUsersTableHeader = [
  {
    id: 1,
    title: 'ID',
    field: 'id',
    filtering: false,
  },
  {
    id: 2,
    title: 'NAME',
    field: 'name',
  },
  {
    id: 3,
    title: 'ROLE',
    field: 'role',
  },
];

const newRequestTableHeader = [
  {
    id: 1,
    title: 'ID',
    field: 'id',
    filtering: false,
  },
  {
    id: 2,
    title: 'NAME',
    field: 'name',
  },
  {
    id: 3,
    title: 'SIGNATURE',
    field: 'signature',
  },
  {
    id: 4,
    title: 'STATUS',
    field: 'status',
  },
];

const finalSignatureTableHeader = [
  {
    id: 1,
    title: 'ID',
    field: 'id',
    filtering: false,
  },
  {
    id: 2,
    title: 'NAME',
    field: 'name',
  },
  {
    id: 3,
    title: 'SIGNATURE',
    field: 'signature',
  },
  {
    id: 4,
    title: 'CATEGORY',
    field: 'category',
  },
];

const finalEditSignatureTableHeader = [
  {
    id: 1,
    title: 'NAME',
    field: 'name',
  },
  {
    id: 2,
    title: 'SIGNATURE',
    field: 'signature',
  },
  {
    id: 3,
    title: 'BRANCH',
    field: 'branch',
  },
  {
    id: 4,
    title: 'STATUS',
    field: 'status',
  },
  {
    id: 5,
    title: 'FINAL CATEGORY',
    field: 'finalCategory',
  },
  {
    id: 6,
    title: 'DATE REGISTERED',
    field: 'dateRegistered',
  },
];

// const editSignatureTableHeader = [
//   {
//     id: 1,
//     title: "NAME",
//     field: "name",
//   },
//   {
//     id: 2,
//     title: "SIGNATURE",
//     field: "signature",
//   },
//   {
//     id: 3,
//     title: "BRANCH",
//     field: "branch",
//   },
//   {
//     id: 4,
//     title: "STATUS",
//     field: "status",
//   },
//   {
//     id: 5,
//     title: "FINAL CATEGORY",
//     field: "finalCategory",
//   },
//   {
//     id: 6,
//     title: "DATE REGISTERED",
//     field: "dateRegistered",
//   },
// ];

// VscSettings
const sidebarRoutes = [
  // {
  //   path: "/",
  //   component: "SearchPage",
  //   Title: "Welcome",
  //   icon: "MdDashboard",
  //   isParent: false,
  // },
  {
    path: '/',
    component: 'StaffRecordsPage',
    Title: 'Staff Records',
    icon: 'MdPeople',
    isParent: false,
  },
  {
    Title: 'System Setups',
    icon: 'MdSettingsSuggest',
    isParent: true,
    children: [
      {
        path: '/branches',
        component: 'BranchesPage',
        Title: 'Branches',
        icon: 'CiBank',
        isParent: false,
      },
      {
        path: '/users',
        component: 'SystemUsersPage',
        Title: 'System Users',
        icon: 'MdAdminPanelSettings',
        isParent: false,
      },
    ],
  },
  {
    path: '/uploadnew',
    component: 'UploadSignaturePage',
    Title: 'Upload Signature',
    icon: 'MdCloudUpload',
    isParent: false,
  },
  // {
  //   path: "/bankuploadnew",
  //   component: "BankUploadSignaturePage",
  //   Title: "Bank Upload",
  //   icon: "MdCloudUpload",
  //   isParent: false,
  // },
  {
    path: '/newuploads',
    component: 'SignatureUploadsPage',
    Title: 'Staff New Signatures',
    icon: 'FaListUl',
    isParent: false,
  },
  // {
  //   path: "/othernewuploads",
  //   component: "OtherSignatureUploadsPage",
  //   Title: "Bank New Signatures",
  //   icon: "FaFileSignature",
  //   isParent: false,
  // },
  {
    path: '/finalsignatures',
    component: 'SignaturesPreviewPage',
    Title: 'Final Signatures',
    icon: 'FaThList',
    isParent: false,
  },

  // {
  //   path: "/otherfinalsignatures",
  //   component: "OtherSignaturesPreviewPage",
  //   Title: "Other Banks",
  //   icon: "FaFileSignature",
  //   isParent: false,
  // },
  {
    path: '/editsignatures',
    component: 'SignaturesEditPage',
    Title: 'Edit Signatures',
    icon: 'FaFileSignature',
    isParent: false,
  },
  {
    Title: 'Other Banks',
    icon: 'BsBank',
    isParent: true,
    children: [
      {
        path: '/banks',
        component: 'BankUploadSignaturePage',
        Title: 'Bank List',
        icon: 'MdCloudUpload',
        isParent: false,
      },
      {
        path: '/bankuploadnew',
        component: 'BankUploadSignaturePage',
        Title: 'Upload Signatures',
        icon: 'FaListUl',
        isParent: false,
      },
      {
        path: '/othernewuploads',
        component: 'OtherSignatureUploadsPage',
        Title: 'Bank New Signatures',
        icon: 'FaThList',
        isParent: false,
      },
      {
        path: '/otherfinalsignatures',
        component: 'OtherSignaturesPreviewPage',
        Title: 'Signatures',
        icon: 'RiBankLine',
        isParent: false,
      },
    ],
  },
];

export {
  staffRecodTableHeader,
  systemRolesTableHeader,
  systemUsersTableHeader,
  newRequestTableHeader,
  finalEditSignatureTableHeader,
  finalSignatureTableHeader,
  sidebarRoutes,
};

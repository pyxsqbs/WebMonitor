'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  common: {
    RecordTable: {
      icInfo: '没有符合条件的记录'
    }
  },
  IndexPageHeader: {
    CREATE_EVENT: '新建事件',
    CREATE_REQUEST: '新建请求',
    QUERY_EVENTS: '查询事件',
    QUERY_REQUEST: '查询请求',
    RETRIEVE_KNOWLEDGE: '检索知识',
    CONFIRM_LOG_OUT: '确认退出登录?',
    LOGOUT: '退出登录',
    CANCEL: '取消',
    EXIT: '退出',
    MODIFY_PERSONAL_INFORMATION: '修改个人信息',
    CHANGE_PASSWORD: '修改密码',
    LOGIN: '登 录',
    registration: 'En',
    registration_TOOLTIPS: 'Chinese/English Toggle',
    LoginForm: {
      formHeader: '登录',
      username_message: '请输入用户名!',
      username_placeholder: '用户名',
      password_message: '请输入密码!',
      password_placeholder: '密码',
      remember: '记住密码',
      login_form_forgot: '忘记密码？',
      goToRegistration: '或者',
      goToRegistration_Link: '去注册',
      login_form_button: '登 录'
    },
    UpdateUserMsgModal: {
      title: '修改个人信息',
      UpdateUserMsgForm: {
        username_label: '真实姓名',
        username_message: '请输入真实姓名,不能为空',
        sex_label: '性别',
        sex_man: '男',
        sex_woman: '女',
        officePhone_label: '办公电话',
        telephone_label: '移动电话',
        telephone_message: '请输入移动电话,不能为空',
        email_label: 'email',
        email_message: '请输入email,不能为空',
        departmentName_label: '部门名称',
        button: '确定',
        button2: '修改密码'
      }
    },
    UpdateUserPwdModal: {
      title: '修改密码',
      UpdateUserPwdForm: {
        username_label: '用户名',
        username_message: '请输入用户名,不能为空',
        originPwd_label: '原始密码',
        originPwd_message: '请输入原始密码,不能为空',
        newPwd_label: '新密码',
        newPwd_message: '请输入新密码,不能为空',
        confirmPwd_label: '确认密码',
        confirmPwd_message: '请输入确认密码,不能为空',
        button: '确定',
        button2: '重置',
        checkPassword: '您输入的两个密码不一致!'
      }
    }
  },
  LoginContent: {
    input: '请用关键词进行搜索，例如“文档及用户手册”',
    submitButton: '检 索',
    retrievalLabel: '热门检索：',
    itemMsgLabel_IT_SERVICE_HOTLINE: 'IT服务热线',
    itemMsgLabel_EMAIL_ADDRESS: '电子邮箱',
    itemMsgLabel_COMPLAINT_HOTLINE: '投诉电话',
    submitFeedback: '提交反馈意见'
  },
  IndexPageContent: {
    headerWords_OVERVIEW: '总览',
    headerWords_MY_REQUEST: '我的请求',
    headerWords_REQUEST_RECORDS: '请求记录',
    headerWords_MY_INCIDENT: '我的事件',
    headerWords_INCIDENT_RECORDS: '事件记录',
    headerWords_CONTACT_US: '联系我们',
    showAll: '查看全部',
    Total: {
      totalItemContainer_MY_REQUESTS: '我的请求',
      totalItemContainer_MY_UNFINIDHED_REQUESTS: '我的未完成请求',
      totalItemContainer_TO_CONFIRM_REQUESTS: '待我确认的请求',
      totalItemContainer_MY_INCIDENTS: '我的事件',
      totalItemContainer_MY_UNFINIDHED_INCIDENTS: '我的未解决事件',
      totalItemContainer_TO_CONFIRM_INCIDENTS: '待我确认的事件'
    },
    RequestHistogram: {
      labelItems_PROCESSED: '已处理',
      labelItems_UNFINISHED: '未完成',
      labelItems_TO_ACCEPT: '待受理',
      labelItems_TO_APPROVE: '待审批',
      labelItems_TO_CONFIRM: '待确认',
      labelItems_CREATED: '已创建',
      labelItems_REQUESTED: '已请求'
    },
    EventHistogram: {
      labelItems_TO_DISPATCH: '待分派',
      labelItems_UNSOLVED: '未解决',
      labelItems_CREATED: '已创建',
      labelItems_TO_CONFIRM: '待确认',
      labelItems_PROCESSED: '已处理'
    },
    RequestRecordTable: {
      columns_WORK_ORDER_NUMBER: '工单编号',
      columns_CAPTION: '标题',
      columns_ENTRY: '分类',
      columns_STATE: '状态',
      columns_CURRENT_PROCESSOR: '当前处理人'
    },
    EventRecordTable: {
      columns_WORK_ORDER_NUMBER: '工单编号',
      columns_CAPTION: '标题',
      columns_ENTRY: '事件来源',
      columns_STATE: '状态',
      columns_CURRENT_PROCESSOR: '当前处理人'
    },
    Announcement: {
      announcementHeader: '公告',
      more: '更多',
      announcementNoDataMsg: '您暂时没有站内消息',
      showMore: '查看更多',
      AnnouncementModal: {
        title: '公告列表',
        AnnouncementTable: {
          columns_ID: '公告ID',
          columns_STATE: '状态',
          columns_CAPTION: '标题',
          showTotal: '条数据'
        }
      },
      AnnouncementDetails: {
        title: '公告详情',
        files: '附件',
        label_VIEW_TIMES: '浏览次数',
        label_PUBLISH_TIME: '发布日期'
      }
    },
    SystemInforms: {
      systemInformsHeader: '系统通知',
      more: '更多',
      systemInformsNoDataMsg: '您暂时没有系统通知',
      showMore: '查看更多'
    }
  },
  NewEvent: {
    title: '新建事件',
    NewEventForm: {
      done: '文件上传成功',
      msg: '文件上传失败',
      msg_error: '文件上传大小不能超过',
      columns_FILRNAME: '文件名称',
      columns_SIZE: '大小',
      columns_UPLOADMAN: '上传人',
      columns_UPLOADTIME: '上传时间',
      columns_ATTACHMENTTYPE: '附件类型',
      columns_OPERATION: '操作',
      title_label: '标题',
      title_message: '请输入标题,不能为空',
      title_initialValue1: '来自',
      title_initialValue2: '的自助事件',
      detail_label: '详述',
      detail_message: '请输入详述,不能为空',
      classification_label: '分类',
      classification_message: '请输入分类,不能为空',
      classification_placeholder: '请输入分类',
      classification_notFoundContent: '无匹配结果',
      occurrenceTime_label: '发生时间',
      occurrenceTime_placeholder: '请选择日期',
      belongProject_label: '所属项目',
      belongProject_placeholder: '请选择项目',
      belongProject_notFoundContent: '无匹配结果',
      eventProperty_label: '事件性质',
      eventProperty_placeholder: '请选择性质',
      eventProperty_notFoundContent: '无匹配结果',
      upload: '添加附件',
      button: '提交工单'
    }
  },
  NewRequest: {
    title: '新建请求',
    NewRequestForm: {
      done: '文件上传成功',
      msg: '文件上传失败',
      msg_error: '文件上传大小不能超过',
      columns_FILRNAME: '文件名称',
      columns_SIZE: '大小',
      columns_UPLOADMAN: '上传人',
      columns_UPLOADTIME: '上传时间',
      columns_ATTACHMENTTYPE: '附件类型',
      title_label: '标题',
      title_message: '请输入标题,不能为空',
      title_initialValue1: '来自',
      title_initialValue2: '的自助请求',
      detail_label: '详述',
      detail_message: '请输入详述,不能为空',
      classification_label: '分类',
      classification_message: '请输入分类,不能为空',
      classification_placeholder: '请输入分类',
      classification_notFoundContent: '无匹配结果',
      occurrenceTime_label: '期望完成时间',
      occurrenceTime_message: '请输入期望完成时间,不能为空',
      occurrenceTime_placeholder: '请选择日期',
      upload: '添加附件',
      button: '提交工单'
    }
  },
  QueryEvent: {
    title: '查询事件',
    QueryEventForm: {
      luceneKey_label: '关键词',
      luceneKey_placeholder: '请输入关键字查询',
      button: '查  询'
    },
    QueryEventTable: {
      columns_WORK_ORDER_NUMBER: '工单编号',
      columns_STATE: '状态',
      columns_CREATION_TIME: '创建时间',
      columns_CAPTION: '标题',
      columns_ENTRY: '分类',
      columns_ACCEPT_GROUP: '受理组',
      columns_ACCEPTOR: '受理人',
      columns_PRIORITY: '优先级',
      columns_REQUESTER: '请求人',
      columns_CREATOR: '创建人',
      columns_CLOSE_CODE: '关闭代码',
      showTotal: '条数据',
      pagination_goTo: '跳至',
      pagination_page: '页'
    }
  },
  QueryRequest: {
    title: '查询请求',
    QueryRequestForm: {
      luceneKey_label: '关键词',
      luceneKey_placeholder: '请输入关键字查询',
      button: '查  询'
    },
    QueryEventTable: {
      columns_WORK_ORDER_NUMBER: '工单编号',
      columns_CAPTION: '标题',
      columns_CLASSIFICATION: '分类',
      columns_STATE: '状态',
      columns_REQUESTER: '请求人',
      columns_CREATION_TIME: '创建时间',
      columns_EXCEPTED_COMPLETION_TIME: '期望完成时间',
      columns_CURRENT_PROCESSOR: '当前处理人',
      showTotal: '条数据',
      pagination_goTo: '跳至',
      pagination_page: '页'
    }
  },
  QueryKnowledge: {
    title: '检索知识',
    Tooltip_title: '全部分类',
    label: '关键词',
    myInput_placeholder: '请用关键词进行搜索，例如“文档及用户手册”',
    submitButton: '检 索',
    QueryKnowledgeTable: {
      columns_KNOWLEDGE_PROPERTY: '知识性质',
      columns_KNOWLEDGE_CAPTION: '知识标题',
      columns_BROWSE_THROUGH: '浏览/次',
      columns_CITE: '引用/次',
      columns_AUTHOR: '作者',
      columns_LAST_UPDATE: '最后更新',
      showTotal: '条数据'
    }
  },
  EventDetails: {
    titleGoBack: '返回',
    contentHeaderMsg_WORK_ORDER_NUMBER: '工单编号',
    contentHeaderMsg_REQUESTER: '请求人',
    contentHeaderMsg_CREATE_TIME: '新建时间',
    contentHeaderMsg_CURRENT_PROCESSOR: '当前处理人',
    contentHeaderMsg_STATE: '状态',
    tabPane_title_DETAILED_INFORMATION: '详细信息',
    tabPane_content_CAPTION: '标题',
    tabPane_content_DETAILS: '详述',
    tabPane_content_ENTERPRISE_NAME: '企业名称',
    tabPane_content_WAIT_CODE: '等待代码',
    tabPane_content_CLASSIFICATION: '分类',
    tabPane_content_EVENT_SOURCE: '事件来源',
    tabPane_content_EVENT_PROPERTY: '事件性质',
    tabPane_content_PRIORITY_LEVEL: '优先级',
    tabPane_content_EMERGENCY_DEGREE: '紧急度',
    tabPane_content_INFLUENCE_DEGREE: '影响度',
    tabPane_content_WHETHER_TO_VIOLATE_THE_SLA: '是否违反SLA',
    tabPane_content_ACCEPT_GROUP: '受理组/人',
    tabPane_content_CLOSE_CODE: '关闭代码',
    tabPane_content_SATISFACTION_DEGREE: '满意度',
    tabPane_content_NO_EVALUATION: '未评价',
    tabPane_content_PROJECT: '所属项目',
    tabPane_content_TARGET_TIME: '目标解决时间',
    tabPane_title_SOLUTIONS: '解决方案',
    tabPane_content_DESCRIPTION: '描述',
    tabPane_content_CAUSE_CODE: '原因代码',
    tabPane_title_ATTACHMENT: '附件',
    SolutionAttachmentTable: {
      columns_FILENAME: '文件名称',
      columns_SIZE: '大小',
      columns_UPLOADER: '上传人',
      columns_UPLOADTIME: '上传时间',
      columns_ATTACHMENTTYPE: '附件类型',
      columns_OPERATION: '操作',
      title: '附件详情：'
    },
    EventAttachmentTable: {
      columns_FILENAME: '文件名称',
      columns_SIZE: '大小',
      columns_UPLOADER: '上传人',
      columns_UPLOADTIME: '上传时间',
      columns_ATTACHMENTTYPE: '附件类型',
      columns_OPERATION: '操作',
      title: '附件详情：'
    }
  },
  RequestDetails: {
    titleGoBack: '返回',
    contentHeaderMsg_WORK_ORDER_NUMBER: '工单编号',
    contentHeaderMsg_REQUESTER: '请求人',
    contentHeaderMsg_CREATE_TIME: '新建时间',
    contentHeaderMsg_CURRENT_PROCESSOR: '当前处理人',
    contentHeaderMsg_STATE: '状态',
    tabPane_title_DETAILED_INFORMATION: '详细信息',
    tabPane_content_CAPTION: '标题',
    tabPane_content_DETAILS: '详述',
    tabPane_content_CLASSIFICATION: '分类',
    tabPane_content_PRIORITY_LEVEL: '优先级',
    tabPane_content_EMERGENCY_DEGREE: '紧急度',
    tabPane_content_INFLUENCE_DEGREE: '影响度',
    tabPane_content_EXPECTED_COMPLETION_TIME: '期望完成时间',
    tabPane_content_CLOSE_TIME: '关闭时间',
    tabPane_content_CLOSE_CODE: '关闭代码',
    tabPane_content_SATISFACTION_DEGREE: '满意度',
    tabPane_content_NO_EVALUATION: '未评价',
    tabPane_title_ATTACHMENT: '附件',
    RequestAttachmentTable: {
      columns_FILENAME: '文件名称',
      columns_SIZE: '大小',
      columns_UPLOADER: '上传人',
      columns_UPLOADTIME: '上传时间',
      columns_ATTACHMENTTYPE: '附件类型',
      columns_OPERATION: '操作',
      title: '附件详情：'
    }
  },
  KnowledgeDetails: {
    titleGoBack: '返回',
    contentHeaderMsg_SUBMIT_TIME: '提交时间',
    contentHeaderMsg_SUBMITTER: '提交人',
    contentHeaderMsg_BROWSE_THROUGH: '浏览',
    contentHeaderMsg_CITE: '引用',
    titleChildren_KNOWLEDGE_PROPERTY: '知识性质',
    titleChildren_KNOWLEDGE_CLASSIFICATION: '知识分类',
    titleChildren_RELATED_ENVIRONMENT: '相关环境',
    titleChildren_KEY_WORDS: '关键字',
    tabPane: '详细信息',
    tabItemTitle: '标题：',
    tabItemContentItemLabel_SOLUTIONS: '解决方案：',
    tabItemContentItemLabel_ATTACHMENT: '附件：',
    tabItemContentItemLabel_KNOWLEDGE_EVALUATION: '知识评价：',
    knowledgeEvaluate_USER: '用户',
    knowledgeEvaluate_TIME: '时间',
    knowledgeEvaluate_SCORE: '分数',
    knowledgeEvaluate_CONTENT: '内容'
  }
};

//# sourceMappingURL=chinese-compiled.js.map
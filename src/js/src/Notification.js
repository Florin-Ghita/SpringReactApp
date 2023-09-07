import { notification } from 'antd';
// import React from 'react';

  const openNotification = (type) => {
    notification[type]({
        message: '',
        description: ''
    });
  };

export const succesNotification = (message, description) =>
  openNotification('succes', message, description);
export const infoNotification = (message, description) =>
  openNotification('info', message, description);
export const warningNotification = (message, description) =>
  openNotification('warning', message, description);
export const errorNotification = (message, description) =>
  openNotification('error', message, description);
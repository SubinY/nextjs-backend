import React, { useState } from 'react';
import styles from './simpleTable.module.css';

const TableComponent = ({ data = [] }) => {
  const columns = [
    { field: 'name', label: '姓名' },
    { field: 'phone', label: '手机号码' },
    { field: 'course', label: '喜好课程' },
    { field: 'submitTime', label: '提交时间' },
    { field: 'age', label: '小孩年龄' }
  ];

  // Generate random data for table
  const generateRandomData = () => {
    const data = [];
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
    const courses = ['Math', 'Science', 'History', 'Art', 'Music'];

    for (let i = 0; i < 10; i++) {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const phoneNumber = Math.floor(1000000000 + Math.random() * 9000000000);
      const submissionDate = new Date(
        +new Date() - Math.floor(Math.random() * 10000000000)
      );
      const coursePreference =
        courses[Math.floor(Math.random() * courses.length)];
      const childAge = Math.floor(Math.random() * 10) + 1;

      data.push({
        name: randomName,
        phone: phoneNumber,
        date: submissionDate.toDateString(),
        course: coursePreference,
        age: childAge
      });
    }

    return data;
  };

  const tableData = generateRandomData();

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((item, index) => (
            <th key={index} className={styles.th}>
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <td className={styles.td}>{item.phone}</td>
            <td className={styles.td}>{item.name}</td>
            <td className={styles.td}>{item.date}</td>
            <td className={styles.td}>{item.course}</td>
            <td className={styles.td}>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;

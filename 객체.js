// const departments = [
//   { department: '개발', employees: ['김철수', '최수지'] },
//   { department: '마케팅', employees: ['이영희'] },
//   { department: '디자인', employees: ['박민준'] }
//   ];
  
    
   
  // 이번엔 배열 길이로해서 결과값이 이렇게 나오게 해보시겠어여?
  
  
  // 개발 부서 직원:
  // - 김철수
  // - 최수지
  
  // 마케팅 부서 직원:
  // - 이영희
  
  // 디자인 부서 직원:
  // - 박민준

  const departments = [
    { department: '개발', employees: ['김철수', '최수지'] },
    { department: '마케팅', employees: ['이영희'] },
    { department: '디자인', employees: ['박민준'] }
  ];
  

  for (let i = 0; i < departments.length; i++) {
    const dept = departments[i];
    console.log(`${dept.department} 부서 직원:`); 

    for (let j = 0; j < dept.employees.length; j++) {
      console.log(`- ${dept.employees[j]}`); 
    }
  
    console.log('');
  }
  
  
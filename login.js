const departments = [
    {
      department: "개발",
      employees: [
        { name: "김철수", role: "프론트엔드" },
        { name: "최수지", role: "백엔드" },
        { name: "손오공", role: "풀스택" },
      ],
    },
    {
      department: "마케팅",
      employees: [{ name: "이영희", role: "디지털 마케터" }],
    },
    {
      department: "디자인",
      employees: [
        { name: "박민준", role: "UI 디자이너" },
        { name: "조성준", role: "UX 디자이너" },
        { name: "백아름", role: "그래픽 디자이너" },
      ],
    },const departments = [
        { department: '개발', employees: ['김철수', '최수지'] },
        { department: '마케팅', employees: ['이영희'] },
        { department: '디자인', employees: ['박민준'] }
        ];
   
        

         
        이번엔 배열 길이로해서 결과값이 이렇게 나오게 해보시겠어여?
        
        
        개발 부서 직원:
        - 김철수
        - 최수지
        
        마케팅 부서 직원:
        - 이영희
        
        디자인 부서 직원:
        - 박민준


     
        for(let i = 0; i < departments.length; i++) {
            console.log(`${todos[i]}`)
          }       
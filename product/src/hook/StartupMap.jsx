{startups.map((startup) => {
    return (
      <tr key={startup.id}>
        <td>{startup.rank}위</td>
        <td>
          <img src={startup.image} alt="회사 로고 이미지"/>
          {startup.name}
        </td>
        <td>{startup.description}</td>
        <td>{startup.category}</td>
        <td>{startup.actualInvest}</td>
        <td>{startup.revenue}</td>
        <td>{startup.employees}</td>
      </tr>
    )
  })}
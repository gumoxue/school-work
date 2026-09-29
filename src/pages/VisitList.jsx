import { Link } from 'react-router-dom'
import { visits } from '../data/visits.js'
import './VisitList.css'

export default function VisitList() {
  return (
    <section className="visit-list">
      <header className="page-header">
        <h1>就诊记录</h1>
        <p className="page-subtitle">共 {visits.length} 条门诊就诊记录</p>
      </header>

      <table className="visit-table">
        <thead>
          <tr>
            <th>患者姓名</th>
            <th>科室</th>
            <th>诊断</th>
            <th>就诊时间</th>
            <th className="cell-action">操作</th>
          </tr>
        </thead>
        <tbody>
          {visits.map((visit) => (
            <tr key={visit.id}>
              <td className="cell-name">
                <Link to={`/visits/${visit.id}`}>{visit.patientName}</Link>
              </td>
              <td>{visit.department}</td>
              <td>{visit.diagnosis}</td>
              <td className="cell-time">{visit.visitTime}</td>
              <td className="cell-action">
                <Link className="detail-link" to={`/visits/${visit.id}`}>
                  查看详情 →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { visits, departments } from '../data/visits.js'
import './VisitList.css'

export default function VisitList() {
  const [keyword, setKeyword] = useState('')
  const [department, setDepartment] = useState('全部科室')

  const filteredVisits = useMemo(() => {
    const kw = keyword.trim().toLowerCase()
    return visits.filter((visit) => {
      const matchDepartment =
        department === '全部科室' || visit.department === department
      const matchKeyword =
        kw === '' ||
        [visit.patientName, visit.diagnosis, visit.doctor, visit.id].some(
          (field) => field.toLowerCase().includes(kw),
        )
      return matchDepartment && matchKeyword
    })
  }, [keyword, department])

  return (
    <section className="visit-list">
      <header className="page-header">
        <h1>就诊记录</h1>
        <p className="page-subtitle">
          共 {visits.length} 条记录，当前显示 {filteredVisits.length} 条
        </p>
      </header>

      <div className="filter-bar">
        <input
          type="search"
          className="filter-input"
          placeholder="按患者姓名 / 诊断 / 医生 / 就诊号搜索"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <select
          className="filter-select"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        >
          <option>全部科室</option>
          {departments.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

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
          {filteredVisits.map((visit) => (
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
          {filteredVisits.length === 0 && (
            <tr>
              <td className="empty-row" colSpan={5}>
                没有符合条件的就诊记录
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}

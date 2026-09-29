import { Link, useParams } from 'react-router-dom'
import { getVisitById } from '../data/visits.js'
import './VisitDetail.css'

export default function VisitDetail() {
  const { id } = useParams()
  const visit = getVisitById(id)

  if (!visit) {
    return (
      <section className="visit-detail">
        <p className="not-found">未找到就诊记录：{id}</p>
        <Link className="back-link" to="/">
          ← 返回就诊记录列表
        </Link>
      </section>
    )
  }

  return (
    <section className="visit-detail">
      <Link className="back-link" to="/">
        ← 返回列表
      </Link>

      <header className="detail-header">
        <h1>{visit.patientName}</h1>
        <span className="detail-badge">{visit.department}</span>
      </header>

      <div className="info-card">
        <h2>患者信息</h2>
        <dl className="info-grid">
          <div>
            <dt>性别</dt>
            <dd>{visit.gender}</dd>
          </div>
          <div>
            <dt>年龄</dt>
            <dd>{visit.age} 岁</dd>
          </div>
          <div>
            <dt>就诊号</dt>
            <dd className="mono">{visit.id}</dd>
          </div>
          <div>
            <dt>就诊时间</dt>
            <dd className="mono">{visit.visitTime}</dd>
          </div>
          <div>
            <dt>接诊医生</dt>
            <dd>{visit.doctor}</dd>
          </div>
        </dl>
      </div>

      <div className="info-card">
        <h2>诊疗信息</h2>
        <dl className="info-grid single">
          <div>
            <dt>主诉</dt>
            <dd>{visit.chiefComplaint}</dd>
          </div>
          <div>
            <dt>诊断</dt>
            <dd className="diagnosis">{visit.diagnosis}</dd>
          </div>
          <div>
            <dt>医嘱</dt>
            <dd>{visit.prescription}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

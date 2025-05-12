import credits from '@/data/db.json'
import "@/styles/chart.css"
export default function AboutCredits() {
  const creditstotal = credits.credits;


  return (
    <div className="chart-container">
      {creditstotal.map((item, index) => (
        <div key={index} className="chart-row">
          <div className="about-name">
            {item.Semester}
          </div>
          <div className="chart-name-bar">
            <div className="chart-name-bar-filled" style={{ width: `${(item.credit)/4.5*100}%` }}>
              {item.credit}점
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

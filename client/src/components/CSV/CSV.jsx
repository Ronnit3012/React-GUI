import React from 'react'

const CSV = ({ data }) => {
  return (
    <section id='csv' className='p-5'>     
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> */}
                    <tr>
                        <th scope="col" className="px-6 py-3">TEAM_ID</th>
                        <th scope="col" className="px-6 py-3">MISSION_TIME</th>
                        <th scope="col" className="px-6 py-3">PACKET COUNT</th>
                        <th scope="col" className="px-6 py-3">MODE</th>
                        <th scope="col" className="px-6 py-3">STATE</th>
                        <th scope="col" className="px-6 py-3">ALT</th>
                        <th scope="col" className="px-6 py-3">HS DEPLOYED</th>
                        <th scope="col" className="px-6 py-3">PC DEPLOYED</th>
                        <th scope="col" className="px-6 py-3">MAST RAISED</th>
                        <th scope="col" className="px-6 py-3">TEMP</th>
                        <th scope="col" className="px-6 py-3">VOLT</th>
                        <th scope="col" className="px-6 py-3">PRESSURE</th>
                        <th scope="col" className="px-6 py-3">GPS TIME</th>
                        <th scope="col" className="px-6 py-3">GPS ALT</th>
                        <th scope="col" className="px-6 py-3">GPS LAT</th>
                        <th scope="col" className="px-6 py-3">GPS LONG</th>
                        <th scope="col" className="px-6 py-3">GPS SATS</th>
                        <th scope="col" className="px-6 py-3">TILT X</th>
                        <th scope="col" className="px-6 py-3">TILT Y</th>
                        <th scope="col" className="px-6 py-3">CMD ECHO</th>
                    </tr>
                </thead>
                <tbody>
                    {data && (
                        data.map((data, index) => {
                            return (
                                <tr key={index} className="bg-white border-b hover:bg-gray-50 text-slate-900">
                                {/* <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"> */}
                                    <td className="px-6 py-4">
                                        {data.teamId}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.missionTime}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.packetCount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.mode}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.state}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.altitude}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.hsDeployed}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.pcDeployed}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.mastRaised}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.temperature}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.voltage}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.pressure}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.gpsTime}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.gpsAltitude}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.gpsLatitude}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.gpsLongitude}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.gpsSats}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.tiltX}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.tiltY}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.cmdEcho}
                                    </td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>

    </section>
  )
}

export default CSV;
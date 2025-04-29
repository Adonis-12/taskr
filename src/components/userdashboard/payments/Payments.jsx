import React from 'react'

function Payments() {
  return (
    <div className='grid grid-cols-1 place-content-center justify-items-center  w-full text-gray-600 font-light'>

    <div className='w-full  grid grid-cols-1 justify-items-start p-4 font-mont text-black '>
        <h1 className='text-5xl '>Payments</h1>
    </div>

    <div className='flex justify-center items-center '>
    <table class="w-full table-auto border border-gray-200">
  <thead class="bg-gray-100">
    <tr>
      <th class="px-8 py-6 text-left text-lg font-bold text-gray-700">Date</th>
      <th class="px-8 py-6 text-left text-lg font-bold text-gray-700">Service</th>
      <th class="px-8 py-6 text-left text-lg font-bold text-gray-700">Amount</th>
      <th class="px-8 py-6 text-left text-lg font-bold text-gray-700">Status</th>
      <th class="px-8 py-6 text-left text-lg font-bold text-gray-700">Invoice</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-gray-200">
    <tr class="hover:bg-gray-50">
      <td class="px-8 py-6 text-lg">Apr 20, 2025</td>
      <td class="px-8 py-6 text-lg">Home Cleaning</td>
      <td class="px-8 py-6 text-lg">$120.00</td>
      <td class="px-8 py-6 text-lg text-green-600 font-semibold">Paid</td>
      <td class="px-8 py-6 text-lg text-blue-600 underline cursor-pointer">Download</td>
    </tr>
    <tr class="hover:bg-gray-50">
      <td class="px-8 py-6 text-lg">Apr 20, 2025</td>
      <td class="px-8 py-6 text-lg">Home Cleaning</td>
      <td class="px-8 py-6 text-lg">$120.00</td>
      <td class="px-8 py-6 text-lg text-green-600 font-semibold">Paid</td>
      <td class="px-8 py-6 text-lg text-blue-600 underline cursor-pointer">Download</td>
    </tr>
    <tr class="hover:bg-gray-50">
      <td class="px-8 py-6 text-lg">Apr 20, 2025</td>
      <td class="px-8 py-6 text-lg">Home Cleaning</td>
      <td class="px-8 py-6 text-lg">$120.00</td>
      <td class="px-8 py-6 text-lg text-green-600 font-semibold">Paid</td>
      <td class="px-8 py-6 text-lg text-blue-600 underline cursor-pointer">Download</td>
    </tr>
    <tr class="hover:bg-gray-50">
      <td class="px-8 py-6 text-lg">Apr 20, 2025</td>
      <td class="px-8 py-6 text-lg">Home Cleaning</td>
      <td class="px-8 py-6 text-lg">$120.00</td>
      <td class="px-8 py-6 text-lg text-green-600 font-semibold">Paid</td>
      <td class="px-8 py-6 text-lg text-blue-600 underline cursor-pointer">Download</td>
    </tr>
    <tr class="hover:bg-gray-50">
      <td class="px-8 py-6 text-lg">Apr 20, 2025</td>
      <td class="px-8 py-6 text-lg">Home Cleaning</td>
      <td class="px-8 py-6 text-lg">$120.00</td>
      <td class="px-8 py-6 text-lg text-green-600 font-semibold">Paid</td>
      <td class="px-8 py-6 text-lg text-blue-600 underline cursor-pointer">Download</td>
    </tr>
    <tr class="hover:bg-gray-50">
      <td class="px-8 py-6 text-lg">Apr 20, 2025</td>
      <td class="px-8 py-6 text-lg">Home Cleaning</td>
      <td class="px-8 py-6 text-lg">$120.00</td>
      <td class="px-8 py-6 text-lg text-green-600 font-semibold">Paid</td>
      <td class="px-8 py-6 text-lg text-blue-600 underline cursor-pointer">Download</td>
    </tr>
  </tbody>
</table>

    <div>

    </div>
    </div>
    </div>
  )
}

export default Payments
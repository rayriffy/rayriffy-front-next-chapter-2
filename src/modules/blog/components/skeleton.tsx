import { FunctionComponent, memo } from 'react'

export const Skeleton: FunctionComponent = memo(() => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0">
      <div className="h-48 w-full bg-gray-300 animate-pulse" />
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <div className="w-16 h-4 bg-blue-500 animate-pulse rounded-md"></div>
        <div className="block mt-2">
          <div className="w-48 h-6 bg-gray-900 animate-pulse rounded-md"></div>
          <div className="mt-3 space-y-1">
            <div className="w-full h-5 bg-gray-500 animate-pulse rounded-md"></div>
            <div className="w-full h-5 bg-gray-500 animate-pulse rounded-md"></div>
            <div className="w-full h-5 bg-gray-500 animate-pulse rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
))

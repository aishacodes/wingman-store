
const TableLoader = ({ rows = 5, columns = 4 }) => {
  return (
    <div className="w-full overflow-x-auto animate-pulse">
      <div className="w-full border rounded-t-lg">
        <div className="flex items-center border-b">
          {Array(columns).fill(null).map((_, index) => (
            <div 
              key={`header-${index}`}
              className="flex-1 p-4"
            >
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>

        {Array(rows).fill(null).map((_, rowIndex) => (
          <div 
            key={`row-${rowIndex}`}
            className="flex items-center border-b last:border-b-0"
          >
            {Array(columns).fill(null).map((_, colIndex) => (
              <div 
                key={`cell-${rowIndex}-${colIndex}`}
                className="flex-1 p-4"
              >
                <div 
                  className={`h-4 bg-gray-100 rounded ${
                    colIndex === 0 ? 'w-3/4' : 'w-full'
                  }`}
                ></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableLoader;
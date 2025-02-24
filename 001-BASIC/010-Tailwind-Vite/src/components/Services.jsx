

const Services = () => {
    const services = [
      { id: 1, title: 'Service 1', description: 'Description for service 1.' },
      { id: 2, title: 'Service 2', description: 'Description for service 2.' },
      { id: 3, title: 'Service 3', description: 'Description for service 3.' },
      { id: 4, title: 'Service 4', description: 'Description for service 4.' },
    ];
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="row">
          {services.map(service => (
            <div
              key={service.id}
              className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4"
            >
              <div className="p-4 bg-white shadow-md rounded-md text-center">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services

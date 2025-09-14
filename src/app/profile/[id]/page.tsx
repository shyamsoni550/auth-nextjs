export default async function userProfile({params}:any) {
    const { id } = await params;
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-10 shadow-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900">User Profile</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Viewing profile for user ID
                    </p>
                </div>

                <div className="text-center">
                    <div className="bg-gray-50 rounded-lg p-6">
                        <h2 className="text-lg font-medium text-gray-900">User ID</h2>
                        <p className="mt-2 text-2xl font-mono text-indigo-600">{id}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

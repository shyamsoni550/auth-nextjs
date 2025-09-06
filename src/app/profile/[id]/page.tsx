export default function userProfile({params}:any) {
    return (
        <div>
            <h1 className="text-6xl">Profile</h1>
            <hr />
            <p className="text-4xl">Profile page
            <br /><span className="text-2xl">{params.id} </span>
            </p>
            
        </div>
    );
}
const conf = {
    appwriteUrl :String(import.meta.env.VITE_APPWRITEURL),
    appwriteProjectId :String(import.meta.env.VITE_APPWRITEPROJECTID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITEDATABASEID),
    appwriteCollectionId :String(import.meta.env.VITE_APPWRITECOLLECTIONID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITEBUCKETID),

}

export default conf;
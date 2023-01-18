import supabase from "../bd/conecttobd";

export const getAllProducts = async () => {

    const { data, error } = await supabase
        .from('products')
        .select()
    if (error) {
        console.log(error)
    }
    if (data) {
        console.log(data)
        return data
    }
}


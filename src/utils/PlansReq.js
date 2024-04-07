
export const getPlansList = async () => {

    try {
        const res = await fetch(`/api/plans`, {
            method: "GET",
        });
        const data = await res.json();
        return data && data.data;
    } catch (e) {

    }
}

export const saveOrUpdatePlan = async (body) => {
    try {
        const res = await fetch('/api/plans', {
            method: "POST",
            body: body,
        });
        const data = await res.json();
        return data;
    } catch (e) {
    }
}

export const deletePlan = async (plansId) => {
    try {
        const res = await fetch(`/api/plans?plansId=${plansId}`, {
            method: "DELETE",
        });
        const data = await res.json();
        return data;
    } catch (e) {
    }
}

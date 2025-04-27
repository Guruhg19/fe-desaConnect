import { useAuthStore } from '@/stores/auth';

export const can = (permission) => {
    const authStore = useAuthStore();
    const usePermissions = authStore.user?.permissions || [];
    return usePermissions.includes(permission);
}
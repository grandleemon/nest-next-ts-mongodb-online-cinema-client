import { useTypedSelector } from '@/hooks/useTypesSelector'

export const useAuth = () => useTypedSelector((state) => state.user)

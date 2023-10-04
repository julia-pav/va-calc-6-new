import Sidebar from '../components/Sidebar'

export default function Layout({ children }: React.PropsWithChildren<{}>) {
	return (
		<div>
			<div>__Here is available some layout</div>
			<Sidebar />
			{children}
		</div>
	)
}

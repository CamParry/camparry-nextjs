import { SEO, Content, Error } from 'components'


export default function Custom404() {

    const meta = {
        title: '500',
	    description: 'Sorry this page could not be found',
    }

    return (
        <Content flex>
			<SEO meta={meta}/>
            <Error
                title="500"
                text="Crikey, the server must have called it a day..."
            />
        </Content>
    )
}
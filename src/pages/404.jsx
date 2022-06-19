import { SEO, Content, Error } from 'components'


export default function Custom404() {

    const meta = {
        title: '404',
	    description: 'Sorry this page could not be found',
    }

    return (
        <Content flex>
			<SEO meta={meta}/>
            <Error
                title="404"
                text="Crikey! There's f*ck all here..."
            />
        </Content>
    )
}

// choc a bloc with fuck all